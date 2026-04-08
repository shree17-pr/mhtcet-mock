'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const data = loadData();
  displayPerformanceSummary(data);
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

function displayPerformanceSummary(data) {
  const totalAttempted = data.sections.reduce((sum, sec) => sum + sec.attempted, 0);
  const accuracy = totalAttempted > 0 ? ((data.totalCorrect / totalAttempted) * 100).toFixed(1) : 0;
  document.getElementById('overall-accuracy').textContent = `${accuracy}%`;

  const strongest = data.sections.reduce((best, sec) => sec.accuracy > best.accuracy ? sec : best);
  const weakest = data.sections.reduce((worst, sec) => sec.accuracy < worst.accuracy ? sec : worst);

  document.getElementById('strongest-subject').textContent = strongest.name;
  document.getElementById('weakest-subject').textContent = weakest.name;

  document.getElementById('attempt-strategy').textContent = `You attempted ${totalAttempted} questions with ${accuracy}% accuracy.`;

  const suggestions = [];
  if (accuracy < 50) suggestions.push('Low overall accuracy. Focus on fundamental concepts.');
  if (weakest.accuracy < 40) suggestions.push(`Low accuracy in ${weakest.name}. Review key topics.`);
  if (data.totalWrong > data.totalCorrect) suggestions.push('More wrong answers than correct. Improve guessing strategy.');
  if (totalAttempted < 100) suggestions.push('Attempted fewer questions. Try to answer more in next attempt.');

  const suggestionsList = document.getElementById('suggestions-list');
  suggestionsList.innerHTML = suggestions.map(s => `<li>${s}</li>`).join('');
}</content>
<parameter name="filePath">c:\Users\Shrip\OneDrive\Documents\GitHub\mhtcet-mock\performance-summary.js