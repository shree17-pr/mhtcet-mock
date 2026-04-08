'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displayQuestionAnalysis(data);
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

function displayQuestionAnalysis(data) {
  const tbody = document.getElementById('question-table-body');
  const allRows = [];

  data.sections.forEach(sec => {
    sec.questions.forEach(q => {
      const row = document.createElement('tr');
      row.className = `question-row ${q.status.toLowerCase()}`;
      row.innerHTML = `
        <td>${sec.name}</td>
        <td>${q.id}</td>
        <td>${q.userAnswer}</td>
        <td>${q.correctAnswer}</td>
        <td class="status-${q.status.toLowerCase()}">${q.status}</td>
        <td>N/A</td>
      `;
      allRows.push(row);
    });
  });

  tbody.append(...allRows);

  // Filters
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterQuestions(btn.dataset.filter);
    });
  });
}

function filterQuestions(filter) {
  const rows = document.querySelectorAll('.question-row');
  rows.forEach(row => {
    if (filter === 'all') {
      row.style.display = '';
    } else {
      row.style.display = row.classList.contains(filter) ? '' : 'none';
    }
  });
}</content>
<parameter name="filePath">c:\Users\Shrip\OneDrive\Documents\GitHub\mhtcet-mock\question-analysis.js