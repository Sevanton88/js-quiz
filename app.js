/* ============================================================
   JS Quiz — Application Logic
   app.js
   ============================================================ */

/* ---------- Config ---------- */
const QUESTIONS_PER_ROUND = 10; // how many questions to pick each round

/* ---------- State ---------- */
let questions    = [];   // shuffled subset for current round
let currentIndex = 0;   // index in questions[]
let score        = 0;   // correct answers count
let answered     = false; // lock until next

/* ---------- DOM References ---------- */
const screenStart    = document.getElementById('screen-start');
const screenQuiz     = document.getElementById('screen-quiz');
const screenResult   = document.getElementById('screen-result');

const startBtn       = document.getElementById('start-btn');
const nextBtn        = document.getElementById('next-btn');
const restartBtn     = document.getElementById('restart-btn');
const homeBtn        = document.getElementById('home-btn');

const questionCounter = document.getElementById('question-counter');
const questionNumber  = document.getElementById('question-number');
const questionText    = document.getElementById('question-text');
const optionsGrid     = document.getElementById('options-grid');
const progressBar     = document.getElementById('progress-bar');
const scoreBadge      = document.getElementById('score-badge');

// Result elements
const resultEmoji  = document.getElementById('result-emoji');
const resultTitle  = document.getElementById('result-title');
const resultSub    = document.getElementById('result-sub');
const scoreNum     = document.getElementById('score-num');
const scoreDenom   = document.getElementById('score-denom');
const statCorrect  = document.getElementById('stat-correct');
const statWrong    = document.getElementById('stat-wrong');
const statPct      = document.getElementById('stat-pct');
const ringFill     = document.getElementById('ring-fill');

/* ---------- Utility: Fisher-Yates Shuffle ---------- */
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- Screen Navigation ---------- */
function showScreen(screen) {
  [screenStart, screenQuiz, screenResult].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

/* ---------- Start / Restart ---------- */
function startQuiz() {
  // Pick a random subset and shuffle options per question
  questions = shuffle(ALL_QUESTIONS)
    .slice(0, QUESTIONS_PER_ROUND)
    .map(q => ({
      ...q,
      // Shuffle answer options while keeping correct answer tracking
      shuffledOptions: shuffleOptions(q.options, q.answer),
    }));

  currentIndex = 0;
  score        = 0;
  answered     = false;

  scoreBadge.textContent = '0 pts';
  showScreen(screenQuiz);
  renderQuestion();
}

/**
 * Shuffle options and return { options, correctIndex }
 * so we always know which position is correct after shuffle.
 */
function shuffleOptions(options, correctAnswerIndex) {
  const indexed = options.map((opt, i) => ({ opt, correct: i === correctAnswerIndex }));
  const shuffled = shuffle(indexed);
  return {
    options:      shuffled.map(o => o.opt),
    correctIndex: shuffled.findIndex(o => o.correct),
  };
}

/* ---------- Render Question ---------- */
function renderQuestion() {
  answered = false;
  nextBtn.classList.add('hidden');

  const q   = questions[currentIndex];
  const num = currentIndex + 1;
  const total = questions.length;

  // Counter & number
  questionCounter.textContent = `Question ${num} of ${total}`;
  questionNumber.textContent  = String(num).padStart(2, '0');

  // Animate question text
  questionText.style.opacity  = '0';
  questionText.style.transform = 'translateY(8px)';
  questionText.textContent    = q.question;
  requestAnimationFrame(() => {
    questionText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    questionText.style.opacity    = '1';
    questionText.style.transform  = 'translateY(0)';
  });

  // Progress bar
  progressBar.style.width = `${(num / total) * 100}%`;

  // Build option buttons
  optionsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.shuffledOptions.options.forEach((optText, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = i;
    btn.innerHTML = `
      <span class="option-letter">${letters[i]}</span>
      <span class="option-text">${escHtml(optText)}</span>
      <span class="option-result-icon"></span>
    `;
    btn.style.animationDelay = `${i * 0.07}s`;
    btn.style.animation = 'card-in 0.35s cubic-bezier(0.34,1.3,0.64,1) both';
    btn.addEventListener('click', () => selectAnswer(btn, i));
    optionsGrid.appendChild(btn);
  });
}

/* ---------- Select Answer ---------- */
function selectAnswer(clickedBtn, selectedIndex) {
  if (answered) return;
  answered = true;

  const q            = questions[currentIndex];
  const correctIndex = q.shuffledOptions.correctIndex;
  const isCorrect    = selectedIndex === correctIndex;

  // Highlight all buttons
  const allBtns = optionsGrid.querySelectorAll('.option-btn');

  allBtns.forEach((btn, i) => {
    btn.disabled = true;
    const icon = btn.querySelector('.option-result-icon');

    if (i === correctIndex) {
      btn.classList.add('correct');
      icon.textContent = '✓';
    } else if (i === selectedIndex && !isCorrect) {
      btn.classList.add('wrong');
      icon.textContent = '✕';
    }
  });

  // Update score
  if (isCorrect) {
    score++;
    scoreBadge.textContent = `${score} pts`;
    // Bump animation
    scoreBadge.classList.add('bump');
    setTimeout(() => scoreBadge.classList.remove('bump'), 300);
  }

  // Show next button
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = currentIndex < questions.length - 1
    ? '       Next →'
    : '  See Results →';
}

/* ---------- Next Question ---------- */
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

/* ---------- Show Results ---------- */
function showResults() {
  showScreen(screenResult);

  const total   = questions.length;
  const wrong   = total - score;
  const pct     = Math.round((score / total) * 100);

  // Populate stats
  scoreNum.textContent  = score;
  scoreDenom.textContent = `/${total}`;
  statCorrect.textContent = score;
  statWrong.textContent   = wrong;
  statPct.textContent     = `${pct}%`;

  // Emoji + message based on score
  const { emoji, title, sub } = getResultMessage(pct);
  resultEmoji.textContent = emoji;
  resultTitle.textContent = title;
  resultSub.textContent   = `You answered ${score} out of ${total} correctly.`;

  // Animate ring
  const circumference = 314; // 2 * π * 50
  const offset = circumference - (pct / 100) * circumference;

  // Inject gradient def into SVG
  const svg = document.querySelector('.score-ring');
  if (!svg.querySelector('defs')) {
    svg.insertAdjacentHTML('afterbegin', `
      <defs>
        <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#6c63ff"/>
          <stop offset="100%" stop-color="#764ba2"/>
        </linearGradient>
      </defs>`);
  }

  // Trigger animation after short delay
  setTimeout(() => {
    ringFill.style.strokeDashoffset = offset;
  }, 200);
}

function getResultMessage(pct) {
  if (pct === 100) return { emoji: '🏆', title: 'Perfect Score!', sub: '' };
  if (pct >= 80)   return { emoji: '🎉', title: 'Great job!',     sub: '' };
  if (pct >= 60)   return { emoji: '👍', title: 'Good effort!',   sub: '' };
  if (pct >= 40)   return { emoji: '📚', title: 'Keep learning!', sub: '' };
  return              { emoji: '💪', title: 'Keep practicing!', sub: '' };
}

/* ---------- Helpers ---------- */
function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ---------- Event Listeners ---------- */
startBtn.addEventListener('click', startQuiz);

nextBtn.addEventListener('click', nextQuestion);

restartBtn.addEventListener('click', startQuiz);

homeBtn.addEventListener('click', () => showScreen(screenStart));

// Keyboard support: Enter / Space to proceed
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && !nextBtn.classList.contains('hidden')) {
    e.preventDefault();
    nextQuestion();
  }
});
