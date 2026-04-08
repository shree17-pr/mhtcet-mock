'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displayCharts(data);
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

function displayCharts(data) {
  // Correct vs Wrong Pie
  const ctx1 = document.getElementById('correct-wrong-pie').getContext('2d');
  new Chart(ctx1, {
    type: 'pie',
    data: {
      labels: ['Correct', 'Wrong'],
      datasets: [{
        data: [data.totalCorrect, data.totalWrong],
        backgroundColor: ['#22c55e', '#ef4444']
      }]
    },
    options: {
      plugins: { legend: { labels: { color: '#e5e7eb' } } }
    }
  });

  // Section-wise Score Bar
  const ctx2 = document.getElementById('section-score-bar').getContext('2d');
  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: data.sections.map(s => s.name),
      datasets: [{
        label: 'Score',
        data: data.sections.map(s => s.score),
        backgroundColor: '#3b82f6'
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

  // Time Spent Bar
  const ctx3 = document.getElementById('time-spent-bar').getContext('2d');
  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: data.sections.map(s => s.name),
      datasets: [{
        label: 'Time (seconds)',
        data: data.sections.map(s => parseTime(s.time)),
        backgroundColor: '#22c55e'
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

  // Accuracy Comparison
  const ctx4 = document.getElementById('accuracy-comparison').getContext('2d');
  new Chart(ctx4, {
    type: 'line',
    data: {
      labels: data.sections.map(s => s.name),
      datasets: [{
        label: 'Accuracy (%)',
        data: data.sections.map(s => parseFloat(s.accuracy)),
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true
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
}

function parseTime(timeStr) {
  const [m, s] = timeStr.split(':').map(Number);
  return m * 60 + s;
}
