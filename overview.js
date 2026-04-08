'use strict';

const TOTAL_TEST_SECONDS = 10800;

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displayOverview(data);
});

function loadData() {
  const data = JSON.parse(localStorage.getItem('mhtcet-results'));
  if (!data) {
    alert('No results found. Please take the test first.');
    window.location.href = 'index.html';
    return null;
  }
  return data;
}

function displayOverview(data) {
  document.getElementById('overview-name').textContent = data.candidateName;
  document.getElementById('total-score').textContent = data.totalScore;
  document.getElementById('percentile').textContent = calculatePercentile(data);
  document.getElementById('overall-accuracy').textContent = `${((data.totalCorrect / (data.totalCorrect + data.totalWrong)) * 100).toFixed(1)}%`;
  const totalTimeUsed = data.timeUsed || data.sections.reduce((sum, sec) => sum + parseTime(sec.time), 0);
  document.getElementById('time-taken').textContent = formatTotalTime(totalTimeUsed);
  document.getElementById('attempted').textContent = data.sections.reduce((sum, sec) => sum + sec.attempted, 0);

  const totalAttempted = data.sections.reduce((sum, sec) => sum + sec.attempted, 0);
  const correctPercent = totalAttempted > 0 ? (data.totalCorrect / totalAttempted) * 100 : 0;
  const wrongPercent = totalAttempted > 0 ? (data.totalWrong / totalAttempted) * 100 : 0;

  document.getElementById('correct-bar').style.width = `${correctPercent}%`;
  document.getElementById('wrong-bar').style.width = `${wrongPercent}%`;
  document.getElementById('correct-count').textContent = data.totalCorrect;
  document.getElementById('wrong-count').textContent = data.totalWrong;

  const sectionCards = document.getElementById('section-cards');
  sectionCards.innerHTML = data.sections.map(sec => `
    <div class="section-card">
      <h3>${sec.name}</h3>
      <p>Score: ${sec.score}/${sec.maxMarks}</p>
      <p>Accuracy: ${sec.accuracy}%</p>
      <p>Time: ${sec.time}</p>
    </div>
  `).join('');

  const bestSubject = data.sections.reduce((best, sec) => sec.score > best.score ? sec : best);
  const weakSubject = data.sections.reduce((weak, sec) => sec.score < weak.score ? sec : weak);

  document.getElementById('best-subject').textContent = bestSubject.name;
  document.getElementById('weak-subject').textContent = weakSubject.name;
}

function calculatePercentile(data) {
  const leaderboard = JSON.parse(localStorage.getItem('mhtcet-leaderboard')) || [];
  if (!leaderboard.length || !data.rank) return 'N/A';
  const rank = data.rank;
  const percentile = Math.round(((leaderboard.length - rank) / leaderboard.length) * 100) || 1;
  return `${percentile}th`;
}

function formatTotalTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function parseTime(timeStr) {
  const [m, s] = timeStr.split(':').map(Number);
  return m * 60 + s;
}
