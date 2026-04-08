'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displayTimeAnalysis(data);
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

function displayTimeAnalysis(data) {
  const totalTime = data.timeUsed || data.sections.reduce((sum, sec) => sum + parseTime(sec.time), 0);
  document.getElementById('total-time').textContent = formatTotalTime(totalTime);

  const totalAttempted = data.sections.reduce((sum, sec) => sum + sec.attempted, 0);
  const avgTimePerQuestion = totalAttempted > 0 ? totalTime / totalAttempted : 0;
  document.getElementById('avg-time').textContent = formatTotalTime(avgTimePerQuestion);

  const fastestSection = data.sections.reduce((fast, sec) => parseTime(sec.time) < parseTime(fast.time) ? sec : fast);
  const slowestSection = data.sections.reduce((slow, sec) => parseTime(sec.time) > parseTime(slow.time) ? sec : slow);

  document.getElementById('fastest-section').textContent = fastestSection.name;
  document.getElementById('slowest-section').textContent = slowestSection.name;

  const timePerSection = document.getElementById('time-per-section');
  timePerSection.innerHTML = data.sections.map(sec => `
    <div class="section-time-card">
      <h3>${sec.name}</h3>
      <p>Time Spent: ${sec.time}</p>
    </div>
  `).join('');

  const timeline = document.getElementById('timeline-bar');
  const totalSeconds = totalTime || data.sections.reduce((sum, sec) => sum + parseTime(sec.time), 0);
  timeline.innerHTML = data.sections.map(sec => {
    const seconds = parseTime(sec.time);
    const width = totalSeconds > 0 ? (seconds / totalSeconds) * 100 : 0;
    return `
      <div class="timeline-segment" style="flex:${seconds}; min-width:80px;">
        <span class="segment-label">${sec.name}</span>
        <span class="segment-time">${sec.time}</span>
      </div>
    `;
  }).join('');
}

function formatTotalTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function parseTime(timeStr) {
  const [m, s] = timeStr.split(':').map(Number);
  return m * 60 + s;
}
