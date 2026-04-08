const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const usersRouter = require('./routes/users');
const testsRouter = require('./routes/tests');
const leaderboardRouter = require('./routes/leaderboard');

app.use('/users', usersRouter);
app.use('/tests', testsRouter);
app.use('/leaderboard', leaderboardRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});