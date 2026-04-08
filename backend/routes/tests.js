const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Helper to read/write JSON
const readJSON = (file) => {
  const filePath = path.join(__dirname, '../data', file);
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJSON = (file, data) => {
  const filePath = path.join(__dirname, '../data', file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// POST /start-test
router.post('/start-test', (req, res) => {
  const { userId, mockId } = req.body;
  if (!userId || !mockId) return res.status(400).json({ error: 'userId and mockId required' });

  const attempts = readJSON('attempts.json');
  const existing = attempts.find(a => a.userId === userId && a.mockId === mockId);
  if (existing && existing.status === 'completed') {
    return res.json({ alreadyAttempted: true });
  }

  if (!existing) {
    const attempt = {
      userId,
      mockId,
      status: 'inProgress',
      startTime: new Date().toISOString(),
      answers: [],
      timeLeft: 10800, // 3 hours in seconds
      section: 'physics'
    };
    attempts.push(attempt);
    writeJSON('attempts.json', attempts);
  }
  res.json({ message: 'Test started' });
});

// POST /save-progress
router.post('/save-progress', (req, res) => {
  const { userId, mockId, answers, timeLeft, section } = req.body;
  const attempts = readJSON('attempts.json');
  const attempt = attempts.find(a => a.userId === userId && a.mockId === mockId);
  if (!attempt) return res.status(404).json({ error: 'Attempt not found' });

  attempt.answers = answers;
  attempt.timeLeft = timeLeft;
  attempt.section = section;
  writeJSON('attempts.json', attempts);
  res.json({ message: 'Progress saved' });
});

// POST /submit-test
router.post('/submit-test', (req, res) => {
  const { userId, mockId, answers, score, accuracy, sectionStats, timeStats } = req.body;
  const attempts = readJSON('attempts.json');
  const attempt = attempts.find(a => a.userId === userId && a.mockId === mockId);
  if (!attempt) return res.status(404).json({ error: 'Attempt not found' });

  attempt.status = 'completed';
  attempt.answers = answers;
  attempt.score = score;
  attempt.accuracy = accuracy;
  attempt.sectionStats = sectionStats;
  attempt.timeStats = timeStats;
  attempt.endTime = new Date().toISOString();

  writeJSON('attempts.json', attempts);

  // Update leaderboard
  const leaderboard = readJSON('leaderboard.json');
  const users = readJSON('users.json');
  const user = users.find(u => u.userId === userId);
  if (user) {
    leaderboard.push({
      userId,
      name: user.name,
      score,
      accuracy,
      mockId
    });
    leaderboard.sort((a, b) => b.score - a.score);
    writeJSON('leaderboard.json', leaderboard);
  }

  res.json({ message: 'Test submitted' });
});

// GET /resume-test
router.get('/resume-test', (req, res) => {
  const { userId, mockId } = req.query;
  const attempts = readJSON('attempts.json');
  const attempt = attempts.find(a => a.userId === userId && a.mockId === mockId);
  if (!attempt) return res.status(404).json({ error: 'Attempt not found' });

  if (attempt.status === 'completed') {
    return res.json({ alreadyAttempted: true });
  }

  res.json({
    answers: attempt.answers,
    timeLeft: attempt.timeLeft,
    section: attempt.section,
    status: attempt.status
  });
});

module.exports = router;