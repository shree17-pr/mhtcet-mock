'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displaySectional(data);
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

function displaySectional(data) {
  const sectionDetails = document.getElementById('section-details');
  sectionDetails.innerHTML = data.sections.map((sec, index) => `
    <div class="section-detail">
      <h3>${sec.name}</h3>
      <div class="section-metrics">
        <div class="metric">Attempted: ${sec.attempted}/${sec.total}</div>
        <div class="metric">Correct: ${sec.correct}</div>
        <div class="metric">Wrong: ${sec.wrong}</div>
        <div class="metric">Accuracy: ${sec.accuracy}%</div>
        <div class="metric">Time Spent: ${sec.time}</div>
      </div>
      <div class="chart-placeholder">
        <canvas id="chart-${index}"></canvas>
      </div>
    </div>
  `).join('');

  data.sections.forEach((sec, index) => {
    createBarChart(`chart-${index}`, sec.correct, sec.wrong, sec.name);
  });
}

function createBarChart(canvasId, correct, wrong, label) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        label: label,
        data: [correct, wrong],
        backgroundColor: ['#22c55e', '#ef4444'],
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { color: '#e5e7eb' }, grid: { color: '#374151' } },
        x: { ticks: { color: '#e5e7eb' }, grid: { color: '#374151' } }
      },
      plugins: { legend: { labels: { color: '#e5e7eb' } } }
    }
  });
}</content>
<parameter name="filePath">c:\Users\Shrip\OneDrive\Documents\GitHub\mhtcet-mock\sectional-analysis.js