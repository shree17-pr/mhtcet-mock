'use strict';

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
  document.getElementById('percentile').textContent = '85th'; // Placeholder
  document.getElementById('overall-accuracy').textContent = `${((data.totalCorrect / (data.totalCorrect + data.totalWrong)) * 100).toFixed(1)}%`;
  document.getElementById('time-taken').textContent = formatTotalTime(TOTAL_TIME_SECONDS - data.timeLeft);
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

function formatTotalTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}</content>
<parameter name="filePath">c:\Users\Shrip\OneDrive\Documents\GitHub\mhtcet-mock\overview.js