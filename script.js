'use strict';

/* ===================================================
   MHT CET MOCK TEST – script.js
   Vanilla JS, no frameworks
   =================================================== */

// ── Constants ──────────────────────────────────────
const TOTAL_TIME_SECONDS = 180 * 60;   // 180 minutes

const SECTIONS = ['physics', 'chemistry', 'math'];
const SECTION_NAMES = { physics: 'Physics', chemistry: 'Chemistry', math: 'Mathematics' };
const SECTION_Q_COUNT = { physics: 50, chemistry: 50, math: 50 };

// Marks per correct answer per section (no negative marking in MHT CET)
const MARKS = { physics: 1, chemistry: 1, math: 2 };
const MAX_MARKS = { physics: 50, chemistry: 50, math: 100 };   // sum = 200

// Question status values
const STATUS = {
  NOT_VISITED:      'not-visited',
  NOT_ANSWERED:     'not-answered',
  ANSWERED:         'answered',
  MARKED:           'marked',
  ANSWERED_MARKED:  'answered-marked'
};

// ── State ───────────────────────────────────────────
let state = {
  candidateName:  '',
  currentSection: 'physics',
  currentIndex:   0,          // index within current section (0-based)
  timeLeft:       TOTAL_TIME_SECONDS,
  timerInterval:  null,
  submitted:      false,

  // per-question state keyed by section then array index
  answers:   { physics: [], chemistry: [], math: [] },
  statuses:  { physics: [], chemistry: [], math: [] }
};

// ── Helpers ─────────────────────────────────────────
function getQuestions(section) {
  return questions[section];
}

function totalQuestions(section) {
  return SECTION_Q_COUNT[section];
}

function countByStatus(section, statusVal) {
  return state.statuses[section].filter(s => s === statusVal).length;
}

function answered(section) {
  return state.statuses[section].filter(s =>
    s === STATUS.ANSWERED || s === STATUS.ANSWERED_MARKED
  ).length;
}

function getOverallStats() {
  let totalAnswered = 0, totalMarked = 0, totalNotVisited = 0, totalNotAnswered = 0;
  SECTIONS.forEach(sec => {
    totalAnswered    += answered(sec);
    totalMarked      += countByStatus(sec, STATUS.MARKED) + countByStatus(sec, STATUS.ANSWERED_MARKED);
    totalNotVisited  += countByStatus(sec, STATUS.NOT_VISITED);
    totalNotAnswered += countByStatus(sec, STATUS.NOT_ANSWERED);
  });
  return { totalAnswered, totalMarked, totalNotVisited, totalNotAnswered };
}

// ── Initialise state arrays ──────────────────────────
function initState() {
  SECTIONS.forEach(sec => {
    state.answers[sec]  = Array(totalQuestions(sec)).fill(null);
    state.statuses[sec] = Array(totalQuestions(sec)).fill(STATUS.NOT_VISITED);
  });
}

// ── Timer ────────────────────────────────────────────
function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function startTimer() {
  const timerEl = document.getElementById('timer');
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    timerEl.textContent = formatTime(state.timeLeft);

    // Warning colouring
    timerEl.classList.remove('warning', 'danger');
    if (state.timeLeft <= 300) {
      timerEl.classList.add('danger');
    } else if (state.timeLeft <= 900) {
      timerEl.classList.add('warning');
    }

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      autoSubmit();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

// ── Render question ───────────────────────────────────
function renderQuestion() {
  const sec = state.currentSection;
  const idx = state.currentIndex;
  const qs  = getQuestions(sec);
  const q   = qs[idx];

  // Mark as visited if first time
  if (state.statuses[sec][idx] === STATUS.NOT_VISITED) {
    state.statuses[sec][idx] = STATUS.NOT_ANSWERED;
  }

  // Meta
  document.getElementById('q-number').textContent = idx + 1;
  document.getElementById('q-total').textContent   = totalQuestions(sec);
  document.getElementById('question-marks-badge').textContent =
    `+${MARKS[sec]} Mark${MARKS[sec] > 1 ? 's' : ''}`;

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Options
  const optList = document.getElementById('options-list');
  optList.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option-item' + (state.answers[sec][idx] === i ? ' selected' : '');
    div.innerHTML = `<span class="option-label">${labels[i]}</span><span class="option-text">${escapeHtml(opt)}</span>`;
    div.addEventListener('click', () => selectOption(i));
    optList.appendChild(div);
  });

  // Prev / Next button states
  document.getElementById('prev-btn').disabled = (idx === 0 && sec === SECTIONS[0]);

  renderPalette();
  updateSidebarStats();
}

function escapeHtml(str) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(str).replace(/[&<>"']/g, ch => map[ch]);
}

// ── Option selection ─────────────────────────────────
function selectOption(optionIndex) {
  const sec = state.currentSection;
  const idx = state.currentIndex;
  state.answers[sec][idx] = optionIndex;

  // Update status: if marked keep answered-marked else answered
  if (state.statuses[sec][idx] === STATUS.MARKED) {
    state.statuses[sec][idx] = STATUS.ANSWERED_MARKED;
  } else {
    state.statuses[sec][idx] = STATUS.ANSWERED;
  }

  // Re-render options highlighting
  const items = document.querySelectorAll('.option-item');
  items.forEach((el, i) => {
    el.classList.toggle('selected', i === optionIndex);
  });
  renderPalette();
  updateSidebarStats();
}

// ── Clear response ────────────────────────────────────
function clearResponse() {
  const sec = state.currentSection;
  const idx = state.currentIndex;
  state.answers[sec][idx] = null;

  const status = state.statuses[sec][idx];
  if (status === STATUS.ANSWERED || status === STATUS.ANSWERED_MARKED) {
    state.statuses[sec][idx] = STATUS.NOT_ANSWERED;
  }

  // Remove selection from options
  document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
  renderPalette();
  updateSidebarStats();
}

// ── Mark for review ──────────────────────────────────
function markForReview() {
  const sec = state.currentSection;
  const idx = state.currentIndex;

  const current = state.statuses[sec][idx];
  if (current === STATUS.ANSWERED) {
    state.statuses[sec][idx] = STATUS.ANSWERED_MARKED;
  } else if (current === STATUS.ANSWERED_MARKED) {
    // Toggle off mark
    state.statuses[sec][idx] = STATUS.ANSWERED;
  } else {
    state.statuses[sec][idx] = STATUS.MARKED;
  }

  renderPalette();
  updateSidebarStats();
  goToNext();
}

// ── Navigation ────────────────────────────────────────
function goToNext() {
  const sec = state.currentSection;
  const idx = state.currentIndex;
  const total = totalQuestions(sec);
  const secIdx = SECTIONS.indexOf(sec);

  if (idx < total - 1) {
    state.currentIndex = idx + 1;
    renderQuestion();
  } else if (secIdx < SECTIONS.length - 1) {
    // Move to next section
    state.currentSection = SECTIONS[secIdx + 1];
    state.currentIndex   = 0;
    setActiveTab(state.currentSection);
    updateSidebarSectionLabel();
    renderQuestion();
  }
  // else on last question of last section – do nothing (submit available)
}

function goToPrev() {
  const sec    = state.currentSection;
  const idx    = state.currentIndex;
  const secIdx = SECTIONS.indexOf(sec);

  if (idx > 0) {
    state.currentIndex = idx - 1;
    renderQuestion();
  } else if (secIdx > 0) {
    // Move to previous section, last question
    const prevSec = SECTIONS[secIdx - 1];
    state.currentSection = prevSec;
    state.currentIndex   = totalQuestions(prevSec) - 1;
    setActiveTab(state.currentSection);
    updateSidebarSectionLabel();
    renderQuestion();
  }
}

// ── Section switching ────────────────────────────────
function switchSection(section) {
  state.currentSection = section;
  state.currentIndex   = 0;
  setActiveTab(section);
  updateSidebarSectionLabel();
  renderQuestion();
}

function setActiveTab(section) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === section);
  });
}

function updateSidebarSectionLabel() {
  document.getElementById('sidebar-section-label').textContent = SECTION_NAMES[state.currentSection];
}

// ── Palette ───────────────────────────────────────────
function renderPalette() {
  const sec   = state.currentSection;
  const grid  = document.getElementById('palette-grid');
  grid.innerHTML = '';

  state.statuses[sec].forEach((status, i) => {
    const btn = document.createElement('button');
    btn.className = `palette-btn ${status}${i === state.currentIndex ? ' current' : ''}`;
    btn.textContent = i + 1;
    btn.title = `Question ${i + 1}`;
    btn.addEventListener('click', () => {
      state.currentIndex = i;
      renderQuestion();
    });
    grid.appendChild(btn);
  });
}

// ── Sidebar stats ─────────────────────────────────────
function updateSidebarStats() {
  const sec = state.currentSection;
  const statsEl = document.getElementById('sidebar-stats');
  statsEl.innerHTML = `
    <strong>Section: ${SECTION_NAMES[sec]}</strong><br>
    ✅ Answered: ${answered(sec)}<br>
    ❌ Not Answered: ${countByStatus(sec, STATUS.NOT_ANSWERED)}<br>
    🔖 Marked: ${countByStatus(sec, STATUS.MARKED)}<br>
    ⭐ Ans+Marked: ${countByStatus(sec, STATUS.ANSWERED_MARKED)}<br>
    ⬜ Not Visited: ${countByStatus(sec, STATUS.NOT_VISITED)}
  `;
}

// ── Submit modal ──────────────────────────────────────
function showSubmitModal() {
  const stats = getOverallStats();
  const total = SECTIONS.reduce((s, sec) => s + totalQuestions(sec), 0);
  document.getElementById('modal-stats').innerHTML = `
    ✅ <strong>Answered:</strong> ${stats.totalAnswered}<br>
    ❌ <strong>Not Answered:</strong> ${stats.totalNotAnswered}<br>
    🔖 <strong>Marked for Review:</strong> ${stats.totalMarked}<br>
    ⬜ <strong>Not Visited:</strong> ${stats.totalNotVisited}<br>
    📋 <strong>Total Questions:</strong> ${total}
  `;
  document.getElementById('submit-modal').classList.remove('hidden');
}

function hideSubmitModal() {
  document.getElementById('submit-modal').classList.add('hidden');
}

// ── Submit ────────────────────────────────────────────
function autoSubmit() {
  hideSubmitModal();
  submitExam();
}

function submitExam() {
  state.submitted = true;
  stopTimer();
  document.getElementById('submit-modal').classList.add('hidden');
  document.getElementById('exam-screen').classList.add('hidden');
  showResult();
}

// ── Result ────────────────────────────────────────────
function showResult() {
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById('result-name').textContent = state.candidateName || 'Candidate';

  let totalScore = 0;
  let totalCorrect = 0, totalWrong = 0, totalSkipped = 0;

  const rows = { physics: document.getElementById('row-physics'), chemistry: document.getElementById('row-chemistry'), math: document.getElementById('row-math') };

  SECTIONS.forEach(sec => {
    const qs = getQuestions(sec);
    let correct = 0, wrong = 0, skipped = 0, score = 0;

    qs.forEach((q, i) => {
      const userAns = state.answers[sec][i];
      if (userAns === null || userAns === undefined) {
        skipped++;
      } else if (userAns === q.answer) {
        correct++;
        score += MARKS[sec];
      } else {
        wrong++;
      }
    });

    totalScore   += score;
    totalCorrect += correct;
    totalWrong   += wrong;
    totalSkipped += skipped;

    rows[sec].innerHTML = `
      <td><strong>${SECTION_NAMES[sec]}</strong></td>
      <td>${totalQuestions(sec)}</td>
      <td style="color:var(--success);font-weight:700">${correct}</td>
      <td style="color:var(--danger);font-weight:700">${wrong}</td>
      <td>${skipped}</td>
      <td style="color:var(--primary);font-weight:700">${score}</td>
      <td>${MAX_MARKS[sec]}</td>
    `;
  });

  document.getElementById('result-score').textContent = totalScore;
  document.getElementById('score-percent').textContent =
    `${((totalScore / 200) * 100).toFixed(1)}%`;
  document.getElementById('stat-correct').textContent = totalCorrect;
  document.getElementById('stat-wrong').textContent   = totalWrong;
  document.getElementById('stat-skipped').textContent = totalSkipped;
  document.getElementById('stat-total').textContent   = 150;
}

// ── Review ────────────────────────────────────────────
function showReview(section) {
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('review-screen').classList.remove('hidden');
  renderReviewSection(section || 'physics');
}

function renderReviewSection(section) {
  // update tab
  document.querySelectorAll('.review-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.section === section);
  });

  const qs      = getQuestions(section);
  const list    = document.getElementById('review-list');
  const labels  = ['A', 'B', 'C', 'D'];
  list.innerHTML = '';

  qs.forEach((q, i) => {
    const userAns = state.answers[section][i];
    const correct = q.answer;
    let resultClass = 'skipped';
    let resultText  = 'Skipped';
    if (userAns !== null && userAns !== undefined) {
      resultClass = userAns === correct ? 'correct' : 'wrong';
      resultText  = userAns === correct ? '✔ Correct' : '✘ Wrong';
    }

    const item = document.createElement('div');
    item.className = `review-item ${resultClass}`;

    const optionsHtml = q.options.map((opt, oi) => {
      let cls = '';
      if (oi === correct) cls = 'correct-answer';
      else if (oi === userAns && userAns !== correct) cls = 'user-wrong';
      return `<div class="review-option ${cls}">
        <strong>${labels[oi]}.</strong> ${escapeHtml(opt)}
        ${oi === correct ? ' <em>(Correct)</em>' : ''}
        ${oi === userAns && userAns !== correct ? ' <em>(Your Answer)</em>' : ''}
      </div>`;
    }).join('');

    item.innerHTML = `
      <div class="review-q-num">Question ${i + 1} · ${SECTION_NAMES[section]} · +${MARKS[section]} mark${MARKS[section] > 1 ? 's' : ''}</div>
      <div class="review-q-text">${escapeHtml(q.question)}</div>
      <div class="review-options">${optionsHtml}</div>
      <span class="review-result-tag ${resultClass}">${resultText}</span>
    `;
    list.appendChild(item);
  });
}

// ── Retake ────────────────────────────────────────────
function retakeExam() {
  stopTimer();
  // Reset state
  state.currentSection = 'physics';
  state.currentIndex   = 0;
  state.timeLeft       = TOTAL_TIME_SECONDS;
  state.submitted      = false;
  state.candidateName  = '';
  initState();

  // Reset UI
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('review-screen').classList.add('hidden');
  document.getElementById('exam-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
  document.getElementById('student-name').value = '';
  document.getElementById('timer').textContent = '03:00:00';
  document.getElementById('timer').className = 'timer-value';
}

// ── Start exam ────────────────────────────────────────
function startExam() {
  const nameInput = document.getElementById('student-name');
  state.candidateName = nameInput.value.trim() || 'Candidate';

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('exam-screen').classList.remove('hidden');
  document.getElementById('candidate-name-display').textContent = state.candidateName;

  initState();
  setActiveTab('physics');
  updateSidebarSectionLabel();
  renderQuestion();
  startTimer();
}

// ── Event Listeners ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Start button
  document.getElementById('start-btn').addEventListener('click', startExam);

  // Allow Enter key on name field
  document.getElementById('student-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') startExam();
  });

  // Section tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchSection(btn.dataset.section));
  });

  // Next / Prev
  document.getElementById('next-btn').addEventListener('click', () => {
    const sec = state.currentSection;
    const idx = state.currentIndex;
    // If not answered yet and navigating away, keep NOT_ANSWERED status (already set)
    if (state.answers[sec][idx] === null &&
        state.statuses[sec][idx] === STATUS.NOT_ANSWERED) {
      // stays NOT_ANSWERED
    }
    goToNext();
  });

  document.getElementById('prev-btn').addEventListener('click', goToPrev);

  // Mark for review
  document.getElementById('mark-btn').addEventListener('click', markForReview);

  // Clear response
  document.getElementById('clear-btn').addEventListener('click', clearResponse);

  // Submit button → show modal
  document.getElementById('submit-btn').addEventListener('click', showSubmitModal);

  // Modal cancel
  document.getElementById('modal-cancel-btn').addEventListener('click', hideSubmitModal);

  // Modal submit
  document.getElementById('modal-submit-btn').addEventListener('click', submitExam);

  // Close modal on overlay click
  document.getElementById('submit-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('submit-modal')) hideSubmitModal();
  });

  // Result: Review button
  document.getElementById('review-btn').addEventListener('click', () => showReview('physics'));

  // Result: Retake button
  document.getElementById('retake-btn').addEventListener('click', retakeExam);

  // Review: section tabs
  document.querySelectorAll('.review-tab').forEach(tab => {
    tab.addEventListener('click', () => renderReviewSection(tab.dataset.section));
  });

  // Review: back to result
  document.getElementById('back-to-result-btn').addEventListener('click', () => {
    document.getElementById('review-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
  });
});
