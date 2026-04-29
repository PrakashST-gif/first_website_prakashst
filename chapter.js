// ===== CHAPTER PAGE ENGINE =====
// All chapter data is provided by data-class6.js through data-class10.js

const ALL_DATA = {};
// Data files register themselves: window.CLASS6_DATA, etc.

let currentClass = 6;
let currentChapter = 0;
let currentPPTSlide = 0;
let qTypeFilter = 'all';
let qMarksFilter = 'all';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Merge all data
  if (window.CLASS6_DATA) ALL_DATA[6] = window.CLASS6_DATA;
  if (window.CLASS7_DATA) ALL_DATA[7] = window.CLASS7_DATA;
  if (window.CLASS8_DATA) ALL_DATA[8] = window.CLASS8_DATA;
  if (window.CLASS9_DATA) ALL_DATA[9] = window.CLASS9_DATA;
  if (window.CLASS10_DATA) ALL_DATA[10] = window.CLASS10_DATA;

  const params = new URLSearchParams(window.location.search);
  currentClass = parseInt(params.get('class')) || 6;
  currentChapter = parseInt(params.get('ch')) || 1;

  loadChapter(currentClass, currentChapter);
  setupNavScroll();
});

function setupNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
  });
}

// ===== LOAD CHAPTER =====
function loadChapter(cls, chNum) {
  currentClass = cls;
  currentChapter = chNum;
  currentPPTSlide = 0;

  const classData = ALL_DATA[cls];
  if (!classData) { document.getElementById('ch-main-title').textContent = 'Data not available'; return; }
  const ch = classData.chapters[chNum - 1];
  if (!ch) { document.getElementById('ch-main-title').textContent = 'Chapter not found'; return; }

  // Update URL
  history.replaceState({}, '', `?class=${cls}&ch=${chNum}`);

  // Header
  document.title = `Ch.${chNum}: ${ch.title} | Class ${cls} | NCERT Science Hub`;
  document.getElementById('page-title').textContent = `Ch.${chNum}: ${ch.title}`;
  document.getElementById('ch-main-title').textContent = ch.title;
  document.getElementById('ch-main-desc').textContent = ch.overview || ch.desc || '';
  document.getElementById('ch-class-badge').textContent = `Class ${cls}`;
  document.getElementById('ch-num-badge').textContent = `Chapter ${chNum}`;
  document.getElementById('ch-subject-badge').textContent = subjectIcon(ch.type) + ' ' + subjectName(ch.type);
  document.getElementById('bc-class').textContent = `Class ${cls}`;
  document.getElementById('bc-chapter').textContent = `Chapter ${chNum}`;

  // Nav buttons
  const totalChapters = classData.chapters.length;
  document.getElementById('prev-chapter-btn').disabled = chNum <= 1;
  document.getElementById('next-chapter-btn').disabled = chNum >= totalChapters;

  // Worksheet meta
  document.getElementById('ws-class').textContent = 'Class ' + cls;
  document.getElementById('ws-chapter-name').textContent = ch.title;

  // Render all tabs
  renderPPT(ch, cls, chNum);
  renderNotes(ch);
  renderSolutions(ch);
  renderQuestions(ch);
  renderWorksheet(ch, cls, chNum);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateChapter(dir) {
  const classData = ALL_DATA[currentClass];
  if (!classData) return;
  const next = currentChapter + dir;
  if (next >= 1 && next <= classData.chapters.length) {
    loadChapter(currentClass, next);
    switchTab('ppt', document.getElementById('tab-ppt'));
  }
}

// ===== TAB SWITCHING =====
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ch-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('content-' + tab).classList.add('active');
  btn.classList.add('active');
}

// ===== SUBJECT HELPERS =====
function subjectIcon(type) {
  const m = { physics:'⚡', chemistry:'🧪', biology:'🌿', earth:'🌍', general:'🔬' };
  return m[type] || '🔬';
}
function subjectName(type) {
  const m = { physics:'Physics', chemistry:'Chemistry', biology:'Biology', earth:'Earth Science', general:'General Science' };
  return m[type] || 'Science';
}
function subjectColor(type) {
  const m = { physics:'var(--physics)', chemistry:'var(--chemistry)', biology:'var(--biology)', earth:'var(--earth)', general:'var(--general)' };
  return m[type] || 'var(--accent)';
}

// ===== PPT RENDERING =====
function renderPPT(ch, cls, chNum) {
  if (!ch.ppt || !ch.ppt.length) return;
  const slides = ch.ppt;
  const area = document.getElementById('ppt-slide-area');
  const thumbs = document.getElementById('ppt-thumbnails');
  const counter = document.getElementById('ppt-counter');

  thumbs.innerHTML = '';
  slides.forEach((s, i) => {
    const t = document.createElement('div');
    t.className = 'ppt-thumb' + (i === 0 ? ' active' : '');
    t.innerHTML = `<div class="ppt-thumb-num">${i + 1}</div><div>${s.title.substring(0,22)}</div>`;
    t.onclick = () => showSlide(i);
    thumbs.appendChild(t);
  });

  function showSlide(idx) {
    currentPPTSlide = idx;
    counter.textContent = `${idx + 1} / ${slides.length}`;
    document.querySelectorAll('.ppt-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
    const s = slides[idx];
    area.innerHTML = buildSlide(s, ch, cls, chNum);
  }

  showSlide(0);
}

function pptNav(dir) {
  const classData = ALL_DATA[currentClass];
  if (!classData) return;
  const ch = classData.chapters[currentChapter - 1];
  const total = ch.ppt ? ch.ppt.length : 0;
  const next = currentPPTSlide + dir;
  if (next >= 0 && next < total) {
    const area = document.getElementById('ppt-slide-area');
    const counter = document.getElementById('ppt-counter');
    const thumbs = document.querySelectorAll('.ppt-thumb');
    currentPPTSlide = next;
    const s = ch.ppt[next];
    area.innerHTML = buildSlide(s, ch, currentClass, currentChapter);
    counter.textContent = `${next + 1} / ${total}`;
    thumbs.forEach((t, i) => t.classList.toggle('active', i === next));
  }
}

function buildSlide(s, ch, cls, chNum) {
  if (s.type === 'title') {
    return `<div class="slide slide-title-layout">
      <div class="slide-class">Class ${cls} · Chapter ${chNum} · ${subjectName(ch.type)}</div>
      <div class="slide-icon">${s.icon || subjectIcon(ch.type)}</div>
      <h2>${s.title}</h2>
      <p class="slide-sub">${s.subtitle || ''}</p>
    </div>`;
  }
  if (s.type === 'objectives' || s.type === 'content') {
    return `<div class="slide slide-content-layout">
      <h3>${s.title}</h3>
      <ul class="slide-points">${(s.points||[]).map(p=>`<li>${p}</li>`).join('')}</ul>
    </div>`;
  }
  if (s.type === 'activity') {
    return `<div class="slide slide-activity-layout">
      <h3>🧪 ${s.title}</h3>
      <p style="font-size:0.88rem;color:var(--text2);margin-bottom:0.75rem;">${s.desc || ''}</p>
      <ol class="activity-steps">${(s.steps||[]).map(st=>`<li>${st}</li>`).join('')}</ol>
    </div>`;
  }
  if (s.type === 'quiz') {
    return `<div class="slide slide-quiz-layout">
      <h3>⚡ Quick Quiz</h3>
      ${(s.questions||[]).map((q,i)=>`<div class="quiz-q">
        <p><strong>Q${i+1}.</strong> ${q.q}</p>
        <button onclick="this.nextElementSibling.style.display='block';this.style.display='none'">Show Answer</button>
        <div class="quiz-ans">✅ ${q.a}</div>
      </div>`).join('')}
    </div>`;
  }
  if (s.type === 'summary') {
    return `<div class="slide slide-summary-layout">
      <h3>📌 Chapter Summary</h3>
      <div class="summary-chips">${(s.points||[]).map(p=>`<span class="summary-chip">${p}</span>`).join('')}</div>
    </div>`;
  }
  // default
  return `<div class="slide slide-content-layout"><h3>${s.title}</h3><ul class="slide-points">${(s.points||[]).map(p=>`<li>${p}</li>`).join('')}</ul></div>`;
}

function printPPT() {
  const classData = ALL_DATA[currentClass];
  if (!classData) return;
  const ch = classData.chapters[currentChapter - 1];
  if (!ch || !ch.ppt) return;
  const win = window.open('', '_blank');
  const slides = ch.ppt;
  win.document.write(`<html><head><title>PPT - ${ch.title}</title>
  <style>
    body{font-family:'Segoe UI',sans-serif;margin:0;padding:0;background:#fff;}
    .slide-page{width:210mm;min-height:148mm;padding:20mm;box-sizing:border-box;page-break-after:always;border:1px solid #eee;display:flex;flex-direction:column;justify-content:center;}
    .slide-page h1{font-size:22pt;color:#1a1a2e;margin-bottom:8px;}
    .slide-page h2{font-size:16pt;color:#4f8ef7;margin-bottom:12px;}
    .slide-page ul{margin:0;padding-left:20px;}
    .slide-page li{font-size:11pt;color:#333;margin-bottom:6px;line-height:1.5;}
    .slide-num{font-size:9pt;color:#999;text-align:right;}
    .slide-class{font-size:9pt;color:#4f8ef7;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}
    @media print{.slide-page{page-break-after:always;border:none;}}
  </style></head><body>`);
  slides.forEach((s, i) => {
    win.document.write(`<div class="slide-page">
      <div class="slide-num">Slide ${i+1} / ${slides.length}</div>
      <div class="slide-class">Class ${currentClass} | Chapter ${currentChapter} | ${ch.title}</div>
      <h1>${s.title}</h1>
      ${s.subtitle ? `<p style="color:#555;font-size:11pt;">${s.subtitle}</p>` : ''}
      ${s.points ? `<ul>${s.points.map(p=>`<li>${p}</li>`).join('')}</ul>` : ''}
      ${s.steps ? `<ol>${s.steps.map(p=>`<li>${p}</li>`).join('')}</ol>` : ''}
      ${s.desc ? `<p style="font-size:11pt;color:#555;">${s.desc}</p>` : ''}
      ${s.questions ? s.questions.map((q,qi)=>`<p style="font-size:11pt;"><strong>Q${qi+1}.</strong> ${q.q}<br/><span style="color:green;">Ans: ${q.a}</span></p>`).join('') : ''}
    </div>`);
  });
  win.document.write('</body></html>');
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 500);
}

// ===== NOTES RENDERING =====
function renderNotes(ch) {
  const body = document.getElementById('notes-body');
  document.getElementById('notes-title').textContent = `Key Notes — ${ch.title}`;
  if (!ch.notes || !ch.notes.length) { body.innerHTML = '<p style="color:var(--text2)">Notes coming soon.</p>'; return; }
  body.innerHTML = ch.notes.map(section => `
    <div class="note-section">
      <div class="note-section-title">📌 ${section.heading}</div>
      <div class="note-points">
        ${section.points.map(p => `<div class="note-point"><span class="note-bullet">▸</span><span>${p}</span></div>`).join('')}
      </div>
    </div>
  `).join('');
}

// ===== SOLUTIONS RENDERING =====
function renderSolutions(ch) {
  const body = document.getElementById('solutions-body');
  document.getElementById('solutions-title').textContent = `NCERT Solutions — ${ch.title}`;
  if (!ch.solutions || !ch.solutions.length) { body.innerHTML = '<p style="color:var(--text2)">Solutions coming soon.</p>'; return; }
  body.innerHTML = ch.solutions.map((s, i) => `
    <div class="solution-item">
      <div class="solution-q" onclick="toggleSolution(this)">
        <span class="solution-q-num">${i+1}</span>
        <span class="solution-q-text">${s.q}</span>
        <span class="solution-toggle">›</span>
      </div>
      <div class="solution-a">${s.a}</div>
    </div>
  `).join('');
}

function toggleSolution(el) {
  const ans = el.nextElementSibling;
  const toggle = el.querySelector('.solution-toggle');
  ans.classList.toggle('open');
  toggle.classList.toggle('open');
}

// ===== QUESTIONS RENDERING =====
function renderQuestions(ch) {
  const body = document.getElementById('questions-body');
  if (!ch.questions || !Object.keys(ch.questions).length) {
    body.innerHTML = '<p style="color:var(--text2)">Questions coming soon.</p>';
    return;
  }
  // Flatten all questions with metadata
  window._allQuestions = [];
  const qTypes = ch.questions;

  function addQs(type, arr) {
    (arr || []).forEach(q => window._allQuestions.push({ ...q, type }));
  }
  addQs('mcq', qTypes.mcq);
  addQs('ar', qTypes.ar);
  addQs('short', qTypes.short1);
  addQs('short', qTypes.short2);
  addQs('long', qTypes.long);
  addQs('activity', qTypes.activity);
  addQs('picture', qTypes.picture);
  addQs('casestudy', qTypes.casestudy);

  qTypeFilter = 'all';
  qMarksFilter = 'all';
  applyQuestionFilters();
}

function filterQ(filterType, val, btn) {
  if (filterType === 'type') {
    qTypeFilter = val;
    btn.closest('.q-filter-group').querySelectorAll('.q-filter').forEach(b => b.classList.remove('active'));
  } else {
    qMarksFilter = val;
    btn.closest('.q-filter-group').querySelectorAll('.q-filter').forEach(b => b.classList.remove('active'));
  }
  btn.classList.add('active');
  applyQuestionFilters();
}

function applyQuestionFilters() {
  const all = window._allQuestions || [];
  const filtered = all.filter(q => {
    const typeMatch = qTypeFilter === 'all' || q.type === qTypeFilter;
    const marksMatch = qMarksFilter === 'all' || String(q.marks) === qMarksFilter;
    return typeMatch && marksMatch;
  });
  const body = document.getElementById('questions-body');
  if (!filtered.length) { body.innerHTML = '<p style="color:var(--text2);padding:2rem;text-align:center;">No questions match this filter.</p>'; return; }
  body.innerHTML = filtered.map((q, i) => buildQuestionCard(q, i)).join('');
}

function buildQuestionCard(q, i) {
  const typeName = { mcq:'MCQ', ar:'Assertion-Reason', short:'Short Answer', long:'Long Answer', activity:'Activity-Based', picture:'Picture-Based', casestudy:'Case Study' };
  let bodyHTML = '';

  if (q.type === 'mcq') {
    bodyHTML = `<ul class="q-options">${q.options.map((o,oi) => `<li class="${oi===q.ans?'correct':''}">(${String.fromCharCode(65+oi)}) ${o}</li>`).join('')}</ul>`;
    bodyHTML += `<div class="q-answer-label">Answer</div><div class="q-answer-text">Option (${String.fromCharCode(65+q.ans)}) — ${q.options[q.ans]}</div>`;
    if (q.explanation) bodyHTML += `<div style="margin-top:0.5rem;font-size:0.85rem;color:var(--text2)">💡 ${q.explanation}</div>`;
  } else if (q.type === 'ar') {
    bodyHTML = `<div class="q-answer-label">Assertion</div><div class="q-answer-text">${q.assertion}</div>
    <div class="q-answer-label" style="margin-top:0.5rem">Reason</div><div class="q-answer-text">${q.reason}</div>
    <div class="q-answer-label" style="margin-top:0.75rem">Answer</div><div class="q-answer-text">${q.a}</div>`;
  } else if (q.type === 'casestudy') {
    bodyHTML = `<div class="q-passage">${q.passage}</div>
    <div class="q-sub-questions">${(q.subqs||[]).map((sq,si)=>`<div class="q-sub"><strong>Q${si+1}. (${sq.marks} mark${sq.marks>1?'s':''})</strong> ${sq.q}<span style="display:block;margin-top:4px;color:var(--teal);">Ans: ${sq.a}</span></div>`).join('')}</div>`;
  } else if (q.type === 'picture') {
    bodyHTML = `<div class="q-img-placeholder">📷 [Refer to textbook diagram / figure]<br/><small>${q.figure || 'Figure: Related diagram from NCERT textbook'}</small></div>
    <div class="q-answer-label">Answer</div><div class="q-answer-text">${q.a}</div>`;
  } else {
    bodyHTML = `<div class="q-answer-label">Answer</div><div class="q-answer-text">${q.a}</div>`;
  }

  return `<div class="question-card" data-type="${q.type}" data-marks="${q.marks}">
    <div class="q-card-top" onclick="toggleQuestion(this)">
      <span class="q-type-badge ${q.type}">${typeName[q.type]||q.type}</span>
      <span class="q-marks">[${q.marks} Mark${q.marks>1?'s':''}]</span>
      <span class="q-text"><strong>Q${i+1}.</strong> ${q.q || q.text || 'Refer passage above'}</span>
      <span class="q-toggle">›</span>
    </div>
    <div class="q-card-body">${bodyHTML}</div>
  </div>`;
}

function toggleQuestion(el) {
  const body = el.nextElementSibling;
  const toggle = el.querySelector('.q-toggle');
  body.classList.toggle('open');
  toggle.classList.toggle('open');
}

// ===== WORKSHEET RENDERING =====
function renderWorksheet(ch, cls, chNum) {
  const ws = ch.worksheet;
  if (!ws) { document.getElementById('worksheet-body').innerHTML = '<p>Worksheet coming soon.</p>'; return; }
  let html = '';
  let answerKey = [];

  if (ws.sectionA && ws.sectionA.length) {
    html += `<div class="ws-section">
      <div class="ws-section-title">SECTION A — Multiple Choice Questions &nbsp;&nbsp; (${ws.sectionA.length} × 1 = ${ws.sectionA.length} Marks)</div>`;
    ws.sectionA.forEach((q, i) => {
      html += `<div class="ws-q"><span class="ws-q-num">${i+1}.</span><div class="ws-q-text">${q.q}
        <ul class="ws-options"><li>(A) ${q.options[0]}</li><li>(B) ${q.options[1]}</li><li>(C) ${q.options[2]}</li><li>(D) ${q.options[3]}</li></ul>
      </div></div>`;
      answerKey.push(`${i+1}. (${String.fromCharCode(65+q.ans)}) ${q.options[q.ans]}`);
    });
    html += '</div>';
  }

  if (ws.sectionB && ws.sectionB.length) {
    const totalMarks = ws.sectionB.reduce((s,q)=>s+q.marks,0);
    html += `<div class="ws-section">
      <div class="ws-section-title">SECTION B — Short Answer Questions &nbsp;&nbsp; (${totalMarks} Marks)</div>`;
    ws.sectionB.forEach((q, i) => {
      const num = (ws.sectionA||[]).length + i + 1;
      html += `<div class="ws-q"><span class="ws-q-num">${num}.</span><div class="ws-q-text">${q.q} &nbsp;<em style="color:#777;font-size:0.8em">[${q.marks} marks]</em>
        <div class="ws-ans-line"></div><div class="ws-ans-line"></div>${q.marks>2?'<div class="ws-ans-line"></div>':''}
      </div></div>`;
      answerKey.push(`${num}. ${q.a}`);
    });
    html += '</div>';
  }

  if (ws.sectionC && ws.sectionC.length) {
    const totalMarks = ws.sectionC.reduce((s,q)=>s+q.marks,0);
    html += `<div class="ws-section">
      <div class="ws-section-title">SECTION C — Short Answer II / Activity &nbsp;&nbsp; (${totalMarks} Marks)</div>`;
    ws.sectionC.forEach((q, i) => {
      const num = (ws.sectionA||[]).length + (ws.sectionB||[]).length + i + 1;
      html += `<div class="ws-q"><span class="ws-q-num">${num}.</span><div class="ws-q-text">${q.q} &nbsp;<em style="color:#777;font-size:0.8em">[${q.marks} marks]</em>
        <div class="ws-ans-line"></div><div class="ws-ans-line"></div><div class="ws-ans-line"></div>
      </div></div>`;
      answerKey.push(`${num}. ${q.a}`);
    });
    html += '</div>';
  }

  if (ws.sectionD && ws.sectionD.length) {
    const totalMarks = ws.sectionD.reduce((s,q)=>s+q.marks,0);
    html += `<div class="ws-section">
      <div class="ws-section-title">SECTION D — Case Study / Long Answer &nbsp;&nbsp; (${totalMarks} Marks)</div>`;
    ws.sectionD.forEach((q, i) => {
      const num = (ws.sectionA||[]).length + (ws.sectionB||[]).length + (ws.sectionC||[]).length + i + 1;
      if (q.passage) {
        html += `<div class="ws-q"><span class="ws-q-num">${num}.</span><div class="ws-q-text">
          <em style="color:#555;font-size:0.85em;">Read the following passage and answer the questions below:</em><br/><br/>
          <div style="background:#f5f5f5;padding:10px;border-left:3px solid #4f8ef7;margin:8px 0;font-size:0.85em;">${q.passage}</div>
          ${(q.subqs||[]).map((sq,si)=>`<p style="margin:8px 0;"><strong>(${si+1})</strong> ${sq.q} <em>[${sq.marks} mark]</em><div class="ws-ans-line"></div>${sq.marks>1?'<div class="ws-ans-line"></div>':''}</p>`).join('')}
        </div></div>`;
        answerKey.push(`${num}. ${(q.subqs||[]).map((sq,si)=>`(${si+1}) ${sq.a}`).join(' | ')}`);
      } else {
        html += `<div class="ws-q"><span class="ws-q-num">${num}.</span><div class="ws-q-text">${q.q} &nbsp;<em style="color:#777;font-size:0.8em">[${q.marks} marks]</em>
          <div class="ws-ans-line"></div><div class="ws-ans-line"></div><div class="ws-ans-line"></div><div class="ws-ans-line"></div>
        </div></div>`;
        answerKey.push(`${num}. ${q.a}`);
      }
    });
    html += '</div>';
  }

  document.getElementById('worksheet-body').innerHTML = html;
  document.getElementById('ws-answers').innerHTML = answerKey.map(a => `<div class="ws-ans-item">${a}</div>`).join('');
}

function toggleAnswers() {
  const el = document.getElementById('ws-answer-key');
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function printWorksheet() {
  window.print();
}
