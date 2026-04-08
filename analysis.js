document.addEventListener('DOMContentLoaded', () => {
  window.location.href = 'overview.html';
});

function displayAnalysis(data) {
  document.getElementById('analysis-name').textContent = data.candidateName;
  document.getElementById('total-score').textContent = data.totalScore;
  document.getElementById('user-rank').textContent = `#${data.rank}`;
  document.getElementById('best-subject').textContent = data.bestSubject;

  // Section stats
  const sectionStats = document.getElementById('section-stats');
  sectionStats.innerHTML = data.sections.map(sec => `
    <div class="stat-card">
      <h4>${sec.name}</h4>
      <p>Score: ${sec.score}/${sec.maxMarks}</p>
      <p>Correct: ${sec.correct}</p>
      <p>Wrong: ${sec.wrong}</p>
      <p>Skipped: ${sec.skipped}</p>
    </div>
  `).join('');

  // Time stats
  const timeStats = document.getElementById('time-stats');
  timeStats.innerHTML = data.sections.map(sec => `
    <div class="stat-card">
      <h4>${sec.name}</h4>
      <p>Time: ${sec.time}</p>
    </div>
  `).join('');

  // Accuracy stats
  const accuracyStats = document.getElementById('accuracy-stats');
  accuracyStats.innerHTML = data.sections.map(sec => `
    <div class="stat-card">
      <h4>${sec.name}</h4>
      <p>Accuracy: ${sec.accuracy}%</p>
    </div>
  `).join('');

  // Attempts stats
  const attemptsStats = document.getElementById('attempts-stats');
  attemptsStats.innerHTML = data.sections.map(sec => `
    <div class="stat-card">
      <h4>${sec.name}</h4>
      <p>Attempted: ${sec.attempted}/${sec.total}</p>
    </div>
  `).join('');

  // Charts
  createBarChart('physics-chart', data.sections[0].correct, data.sections[0].wrong, 'Physics');
  createBarChart('chemistry-chart', data.sections[1].correct, data.sections[1].wrong, 'Chemistry');
  createBarChart('math-chart', data.sections[2].correct, data.sections[2].wrong, 'Mathematics');

  // Overall chart
  createBarChart('overall-chart', data.totalCorrect, data.totalWrong, 'Overall');

  // Back button
  document.getElementById('back-to-home-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
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
        borderColor: ['#16a34a', '#dc2626'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: { color: '#e5e7eb' },
          grid: { color: '#374151' }
        },
        x: {
          ticks: { color: '#e5e7eb' },
          grid: { color: '#374151' }
        }
      },
      plugins: {
        legend: { labels: { color: '#e5e7eb' } }
      }
    }
  });
}</content>
<parameter name="filePath">c:\Users\Shrip\OneDrive\Documents\GitHub\mhtcet-mock\analysis.js