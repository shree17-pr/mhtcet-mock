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

// GET /leaderboard
router.get('/leaderboard', (req, res) => {
  const { mockId } = req.query;
  const leaderboard = readJSON('leaderboard.json');
  const filtered = leaderboard.filter(l => l.mockId === mockId);
  const ranked = filtered.map((entry, index) => ({
    rank: index + 1,
    name: entry.name,
    score: entry.score,
    accuracy: entry.accuracy
  }));
  res.json(ranked);
});

// GET /user-stats
router.get('/user-stats', (req, res) => {
  const { userId } = req.query;
  const attempts = readJSON('attempts.json');
  const userAttempts = attempts.filter(a => a.userId === userId && a.status === 'completed');

  if (userAttempts.length === 0) return res.json({ testsAttempted: 0 });

  const totalScore = userAttempts.reduce((sum, a) => sum + a.score, 0);
  const avgScore = totalScore / userAttempts.length;
  const totalAccuracy = userAttempts.reduce((sum, a) => sum + a.accuracy, 0);
  const avgAccuracy = totalAccuracy / userAttempts.length;

  // Best and weak subject based on sectionStats
  const subjects = {};
  userAttempts.forEach(attempt => {
    if (attempt.sectionStats) {
      attempt.sectionStats.forEach(stat => {
        if (!subjects[stat.name]) subjects[stat.name] = [];
        subjects[stat.name].push(stat.accuracy);
      });
    }
  });

  const subjectAvgs = Object.keys(subjects).map(name => ({
    name,
    avg: subjects[name].reduce((sum, acc) => sum + acc, 0) / subjects[name].length
  }));

  const bestSubject = subjectAvgs.reduce((best, sub) => sub.avg > best.avg ? sub : best, subjectAvgs[0]);
  const weakSubject = subjectAvgs.reduce((weak, sub) => sub.avg < weak.avg ? sub : weak, subjectAvgs[0]);

  res.json({
    testsAttempted: userAttempts.length,
    avgScore: Math.round(avgScore),
    avgAccuracy: Math.round(avgAccuracy),
    bestSubject: bestSubject ? bestSubject.name : null,
    weakSubject: weakSubject ? weakSubject.name : null
  });
});

module.exports = router;