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

// POST /login
router.post('/login', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  const users = readJSON('users.json');
  let user = users.find(u => u.email === email);
  if (!user) {
    const userId = (users.length + 1).toString();
    user = { userId, name, email };
    users.push(user);
    writeJSON('users.json', users);
  }
  res.json({ userId: user.userId });
});

module.exports = router;