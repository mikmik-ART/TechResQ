/* ===== TechResQ: content, quiz logic, and page routing ===== */

const MODULES = [
  { id: 1, title: 'Sudden Crashouts & Freezes', tag: 'Task Manager & safe force-quitting',
    card: 'Task Manager, safe force-quitting and what to do when everything stops responding.',
    intro: 'Your screen stops moving, the mouse spins forever, or a program just vanishes. It feels scary, but most freezes come from one stubborn app using too much memory or CPU.',
    // Paste your embed code between the backticks after "embed:". Leave it empty to show the "Video coming soon" box.
    video: { title: 'Watch: How to Use Task Manager', embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eey6agMuV90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    what: 'A freeze happens when a program (or Windows itself) gets overloaded and stops responding. Common causes: too many apps or browser tabs open, low memory (RAM), an overheating computer, buggy or outdated software, or a pending update. A crash is when a program closes suddenly or Windows shows a blue screen.',
    steps: [
      ['Wait 30–60 seconds', 'Give it a moment. Heavy tasks can make the screen look stuck even though the computer is still working.'],
      ['Open Task Manager', 'Press Ctrl + Shift + Esc. If that does not open, press Ctrl + Alt + Delete and choose Task Manager.'],
      ['End the frozen app safely', 'On the Processes tab, find the app marked "Not responding" (or using very high CPU / Memory), select it, then click End task.'],
      ['Restart if the whole PC is stuck', 'Press Ctrl + Alt + Delete, click the power icon in the corner, then choose Restart.'],
      ['Hard shutdown as a last resort', 'Hold the power button for about 10 seconds only if nothing responds. Unsaved work will be lost, so use this last.']
    ],
    shortcuts: [['Ctrl + Shift + Esc', 'Open Task Manager'], ['Ctrl + Alt + Del', 'Security screen & restart options'], ['Alt + F4', 'Close the current window'], ['Ctrl + S', 'Save your work often']],
    tips: ['Save your work every few minutes.', 'Close tabs and apps you are not using.', 'Keep Windows and drivers updated.', 'Restart your PC regularly.'] },
  { id: 2, title: 'The "No Internet" Mystery', tag: 'Wi-Fi & router troubleshooting',
    card: 'Wi-Fi checks and router troubleshooting to get you back online fast.',
    intro: 'The Wi-Fi icon says connected, but nothing loads. Before calling anyone, a few simple checks fix most connection problems in under five minutes.',
    // Paste your embed code between the backticks after "embed:". Leave it empty to show the "Video coming soon" box.
    video: { title: 'Watch: How to Fix Your Wi-Fi and Router', embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/oAgACevpnjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    what: '"No internet" usually comes from one of three places: your device (Wi-Fi turned off, airplane mode, a glitch), your router (needs a restart or has loose cables), or your internet provider (an outage on their side). Figuring out which one it is is the key to fixing it fast.',
    steps: [
      ['Check the basics on your device', 'Make sure Wi-Fi is on and Airplane mode is off. Many laptops have an Fn + Wi-Fi key that is easy to press by accident.'],
      ['Test another device', 'If your phone also cannot get online, the problem is the router or provider, not your computer.'],
      ['Restart the router', 'Unplug the router (and modem) for 30 seconds, plug it back in and wait about 2 minutes for the lights to settle.'],
      ['Reconnect to the network', 'Click the Wi-Fi icon, choose your network, select Forget, then connect again and re-enter the password. You can also run the Windows Network troubleshooter.'],
      ['Check cables and lights', 'Make sure power and Ethernet cables are firmly plugged in. A red or blinking Internet light usually means a provider outage, so contact your ISP.']
    ],
    shortcuts: [['Win + A', 'Quick settings (Wi-Fi, Airplane)'], ['Win + I', 'Open Windows Settings'], ['ping google.com', 'Test your connection (Command Prompt)'], ['Fn + Wi-Fi key', 'Toggle Wi-Fi on laptops']],
    tips: ['Keep the router in an open, central spot.', 'Restart the router once a month.', 'Store your Wi-Fi password somewhere safe.', 'Know your ISP support number.'] },
  { id: 3, title: 'The Deleted File Panic', tag: 'Recycle Bin & undo shortcuts',
    card: 'Recycle Bin rescues and undo shortcuts that bring lost files back.',
    intro: 'You hit Delete and your heart dropped. Take a breath: in most cases deleted files are still recoverable, especially if you act quickly.',
    // Paste your embed code between the backticks after "embed:". Leave it empty to show the "Video coming soon" box.
    video: { title: 'Watch: How to Recover Deleted Files', embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eWBYiwuiZCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    what: 'When you delete a file normally, Windows moves it to the Recycle Bin instead of erasing it. It stays there until you empty the bin. Files deleted with Shift + Delete, from a USB drive or from a network drive skip the bin and need other recovery options.',
    steps: [
      ['Try Undo right away', 'Press Ctrl + Z immediately after deleting. In File Explorer this brings the file straight back.'],
      ['Open the Recycle Bin', 'Double-click the Recycle Bin icon on your desktop. Use the search box if there are lots of files.'],
      ['Restore the file', 'Right-click the file and choose Restore. It returns to its original folder.'],
      ['Check previous versions & cloud', 'Right-click the folder, choose Properties, then Previous Versions. Also check the trash in OneDrive or Google Drive.'],
      ['Stop using the drive if it is gone for good', 'If the bin was emptied, avoid saving new files and try a trusted file-recovery tool or ask a technician.']
    ],
    shortcuts: [['Ctrl + Z', 'Undo the last action'], ['Ctrl + Y', 'Redo the action'], ['Delete', 'Send file to Recycle Bin'], ['Shift + Delete', 'Permanent delete (careful!)']],
    tips: ['Back up important files regularly.', 'Think twice before emptying the Recycle Bin.', 'Turn on File History or cloud sync.'] },
  { id: 4, title: 'Hardware & Display Troubles', tag: 'Black screens & loose cables',
    card: 'Black screens, loose cables and quick physical checks that fix most problems.',
    intro: 'A black screen, "no signal" or a mouse that will not respond. Many "broken computer" problems are really just a loose cable, so start with the physical checks.',
    // Paste your embed code between the backticks after "embed:". Leave it empty to show the "Video coming soon" box.
    video: { title: 'Watch: How to Fix a Black Screen', embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/LqA5l7fZ2s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>` },
    what: 'If the screen is black but the computer is on (fans spinning, lights on), the problem is usually the display connection, the monitor itself or the wrong output selected. If nothing turns on at all, check power first: the outlet, power strip, charger and battery.',
    steps: [
      ['Check power everywhere', 'Is the monitor power light on? Is the PC plugged in and the power strip switched on? On a laptop, plug in the charger.'],
      ['Reseat the cables', 'Unplug and firmly re-plug the HDMI / DisplayPort / VGA cable on both ends. Also check the USB cables for keyboard and mouse.'],
      ['Wake or switch the display', 'Press any key, then try Win + P to change the display mode, or Win + Ctrl + Shift + B to restart the graphics driver.'],
      ['Swap and test', 'Try a different cable, port or monitor. This quickly shows which part is faulty.'],
      ['Do a hold-power reset', 'For a laptop that will not turn on: unplug the charger, hold the power button for 15 seconds, then plug in and try again.']
    ],
    shortcuts: [['Win + P', 'Switch display / projector mode'], ['Win + Ctrl + Shift + B', 'Restart the graphics driver'], ['Win + D', 'Show the desktop'], ['Fn + Brightness', 'Raise brightness if it looks black']],
    tips: ['Never force a cable. Check the shape of the port.', 'Shut down before touching internal parts.', 'Keep vents clean to prevent overheating.'] }
];

// a = index of the correct option in o
const QUESTIONS = [
  { m: 1, q: 'Which shortcut opens Task Manager directly?', o: ['Ctrl + C', 'Ctrl + Shift + Esc', 'Alt + Tab', 'Win + L'], a: 1, why: 'Ctrl + Shift + Esc opens Task Manager straight away, without the extra security screen.' },
  { m: 1, q: 'One app is frozen but the rest of your PC works. What should you try first?', o: ['Hold the power button right away', 'Unplug the computer', 'Wait a minute, then End task in Task Manager', 'Reinstall Windows'], a: 2, why: 'Give it a minute, then close only the stuck app with End task. It is safer than forcing the whole PC off.' },
  { m: 1, q: 'When is a hard shutdown (holding the power button) appropriate?', o: ['Every time something is slow', 'Only as a last resort when nothing responds', 'Before opening any app', 'Whenever you finish work'], a: 1, why: 'Holding the power button cuts power and unsaved work is lost, so use it only when nothing else responds.' },
  { m: 2, q: 'Your laptop says "No internet". What is a good first check?', o: ['Reinstall Windows', 'Make sure Wi-Fi is on and Airplane mode is off', 'Delete your browser history', 'Buy a new laptop'], a: 1, why: 'A switched-off Wi-Fi or Airplane mode is a very common cause, and it takes seconds to check.' },
  { m: 2, q: 'What is the right way to restart a router?', o: ['Unplug it for about 30 seconds, plug it back in and wait', 'Press the reset button many times', 'Hit it gently', 'Cover its vents'], a: 0, why: 'Unplugging for about 30 seconds lets the router fully reset. Wait around 2 minutes for the lights to settle.' },
  { m: 2, q: 'All devices are offline and the router\'s Internet light is red. What is the likely cause?', o: ['An outdated keyboard', 'A problem with the internet provider (ISP)', 'Low screen brightness', 'A full Recycle Bin'], a: 1, why: 'If every device is offline and the Internet light is red, the problem is likely on the provider\'s side. Contact your ISP.' },
  { m: 3, q: 'You just deleted a file by accident. What is the fastest undo?', o: ['Ctrl + Z', 'Ctrl + P', 'Ctrl + N', 'Alt + F4'], a: 0, why: 'Ctrl + Z undoes the last action, including a delete, if you press it right away.' },
  { m: 3, q: 'Where do normally deleted files go on Windows?', o: ['They vanish forever', 'The Recycle Bin', 'The Desktop', 'Task Manager'], a: 1, why: 'Normal deletes go to the Recycle Bin, where files wait until the bin is emptied.' },
  { m: 3, q: 'Which action skips the Recycle Bin?', o: ['Pressing Delete', 'Right-click, then Delete', 'Pressing Shift + Delete', 'Dragging a file to the Desktop'], a: 2, why: 'Shift + Delete removes the file straight away without sending it to the Recycle Bin.' },
  { m: 4, q: 'The screen is black but the PC fans are spinning. What should you check first?', o: ['Monitor power and cable connections', 'Reinstall Windows', 'Buy a new PC', 'Change the wallpaper'], a: 0, why: 'A black screen with spinning fans usually means a power or cable problem at the monitor, so check those first.' },
  { m: 4, q: 'Which shortcut switches the display output (projector / second screen)?', o: ['Win + P', 'Win + L', 'Ctrl + P', 'Win + D'], a: 0, why: 'Win + P opens the display menu where you can duplicate, extend or switch screens.' },
  { m: 4, q: 'Your USB mouse suddenly stops working. What is a sensible first step?', o: ['Format the drive', 'Replug it or try a different USB port', 'Replace the motherboard', 'Update the BIOS'], a: 1, why: 'Replugging or trying another USB port fixes many "dead" mice and keyboards.' }
];

/* ---------- helpers ---------- */
const app = document.getElementById('app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const LETTERS = ['A', 'B', 'C', 'D'];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const moduleById = id => MODULES.find(m => m.id === id);

/* ---------- quiz state ---------- */
let quiz = null;    // the quiz currently being taken
let result = null;  // the last finished quiz

function buildQuiz(kind, id) {
  let pool;
  if (kind === 'module') {
    pool = QUESTIONS.filter(q => q.m === id);
  } else {
    // Random quiz: one question from each of Modules 1-4, plus one extra, in random order
    pool = [1, 2, 3, 4].map(m => shuffle(QUESTIONS.filter(q => q.m === m))[0]);
    pool.push(shuffle(QUESTIONS.filter(q => !pool.includes(q)))[0]);
  }
  const items = shuffle(pool).map(q => {
    const order = shuffle(q.o.map((_, i) => i));
    return { m: q.m, q: q.q, opts: order.map(i => q.o[i]), correct: order.indexOf(q.a), why: q.why, picked: null };
  });
  return { kind, id, items };
}

/* ---------- views ---------- */
function renderHome() {
  document.title = 'TechResQ | Computer Emergency Rescue Hub';
  app.innerHTML = `
    <section class="hero">
      <div class="hero-art" aria-hidden="true">
        <div class="stars"></div><div class="glow glow-a"></div><div class="glow glow-b"></div>
        <svg class="rocks left" viewBox="0 0 430 240" preserveAspectRatio="none"><polygon points="0,240 0,50 70,0 120,100 180,20 260,140 330,100 430,240"/></svg>
        <svg class="rocks right" viewBox="0 0 430 240" preserveAspectRatio="none"><polygon points="0,240 0,50 70,0 120,100 180,20 260,140 330,100 430,240"/></svg>
        <div class="grid"></div>
      </div>
      <div class="hero-photo" aria-hidden="true"></div>
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="mascot" aria-hidden="true"><div class="orb"></div><span class="eye l"></span><span class="eye r"></span></div>
        <p class="eyebrow">THE COMPUTER EMERGENCY RESCUE HUB</p>
        <h1>Computer in Crisis? Don't Panic.</h1>
        <p class="intro">Quick, friendly rescue guides for the most common computer emergencies. Learn the fix in minutes, then test your tech-survival skills with a gamified quiz.</p>
        <div class="hero-actions">
          <a class="btn" href="#/quick">Start Quick Quiz</a>
          <a class="btn btn-ghost" href="#/modules" id="browse">Browse Modules</a>
        </div>
        <p class="hint">Randomized quiz covering Modules 1 to 4. Takes about 3 minutes.</p>
      </div>
    </section>
    <section class="section" id="modules" aria-labelledby="mod-h">
      <div class="container">
        <div class="sec-head">
          <h2 id="mod-h">Pick Your Emergency</h2>
          <p>Choose a card to jump straight into a rescue guide. Each module ends with a short quiz so you can lock in what you learned.</p>
        </div>
        <div class="cards">
          ${MODULES.map(m => `
            <a class="card" href="#/module/${m.id}">
              <div class="card-top"><span class="num" aria-hidden="true">${pad2(m.id)}</span><span class="tag">MODULE ${pad2(m.id)}</span></div>
              <h3>${esc(m.title)}</h3>
              <p>${esc(m.card)}</p>
              <span class="go">Start rescue</span>
            </a>`).join('')}
        </div>
      </div>
    </section>`;
}

function renderModule(id) {
  const m = moduleById(id);
  if (!m) return renderHome();
  document.title = `${m.title} | TechResQ`;
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="#/modules">&larr; Back to all modules</a>
        <div class="title-row">
          <span class="num" aria-hidden="true">${pad2(m.id)}</span>
          <div>
            <p class="kicker">MODULE ${pad2(m.id)} &middot; ${esc(m.tag.toUpperCase())}</p>
            <h1>${esc(m.title)}</h1>
          </div>
        </div>
        <p class="lead">${esc(m.intro)}</p>
      </div>
    </header>
    <div class="container">
      <div class="module-body">
        <div class="stack">
          <section class="panel"><h2>WHAT'S HAPPENING?</h2><p>${esc(m.what)}</p></section>
          ${m.video ? `
          <section class="panel video-panel">
            <h3 class="video-title">${esc(m.video.title)}</h3>
            <div class="video-frame">
              ${m.video.embed || '<p class="video-empty">Video coming soon</p>'}
            </div>
          </section>` : ''}
          <h2>Rescue steps</h2>
          <ol class="steps">
            ${m.steps.map((s, i) => `<li class="step"><span class="n" aria-hidden="true">${i + 1}</span><div><h3>${esc(s[0])}</h3><p>${esc(s[1])}</p></div></li>`).join('')}
          </ol>
        </div>
        <aside class="stack" aria-label="Shortcuts and tips">
          <section class="panel hl"><h2>SHORTCUTS &amp; QUICK TOOLS</h2>
            <dl class="keys">${m.shortcuts.map(s => `<div><dt>${esc(s[0])}</dt><dd>${esc(s[1])}</dd></div>`).join('')}</dl>
          </section>
          <section class="panel"><h2>PRO TIPS</h2>
            <ul class="tips">${m.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          </section>
        </aside>
      </div>
      <section class="cta-band">
        <h2>Ready to test your knowledge?</h2>
        <p>Take a short 3-question quiz on this module and see if you can rescue the day.</p>
        <a class="btn btn-light" href="#/quiz/${m.id}">Take the Module Quiz</a>
      </section>
    </div>`;
}

function renderQuiz(kind, id) {
  const mod = kind === 'module' ? moduleById(id) : null;
  if (kind === 'module' && !mod) return renderHome();
  quiz = buildQuiz(kind, id);
  const title = mod ? `${mod.title} Quiz` : 'Quick Quiz Challenge';
  document.title = `${title} | TechResQ`;
  const n = quiz.items.length;
  app.innerHTML = `
    <header class="banner">
      <div class="container">
        <a class="back" href="${mod ? '#/module/' + mod.id : '#/'}">&larr; ${mod ? 'Back to module' : 'Back to home'}</a>
        <p class="kicker" style="font-size:12.5px;font-weight:700;letter-spacing:.14em;color:var(--peach)">${mod ? 'MODULE ' + pad2(mod.id) + ' QUIZ' : 'RANDOMIZED CHALLENGE &middot; MODULES 1 TO 4'}</p>
        <h1>${esc(title)}</h1>
        <p class="quiz-meta">${n} questions. Pick one answer for each. No timer, no pressure.</p>
        <div class="progress"><div class="bar"><i id="barfill"></i></div><span id="progtext" aria-live="polite">0 of ${n} answered</span></div>
      </div>
    </header>
    <form class="quiz" id="quizform" novalidate>
      ${quiz.items.map((it, qi) => `
        <div class="qcard" id="q${qi}">
          <fieldset>
            <legend><span class="qnum">QUESTION ${qi + 1} OF ${n}</span><span class="qtext">${esc(it.q)}</span></legend>
            <div class="opts">
              ${it.opts.map((o, oi) => `
                <label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span class="ltr" aria-hidden="true">${LETTERS[oi]}</span><span>${esc(o)}</span></label>`).join('')}
            </div>
          </fieldset>
        </div>`).join('')}
      <p class="notice" id="notice" role="alert"></p>
      <div class="quiz-actions">
        <button class="btn" type="submit">Submit Answers</button>
        <a class="btn btn-ghost" href="${mod ? '#/module/' + mod.id : '#/'}">${mod ? 'Review Module' : 'Back to Home'}</a>
      </div>
    </form>`;

  const form = document.getElementById('quizform');
  const fill = document.getElementById('barfill');
  const prog = document.getElementById('progtext');
  const notice = document.getElementById('notice');

  form.addEventListener('change', e => {
    const input = e.target;
    if (input.type !== 'radio') return;
    const qi = Number(input.name.slice(1));
    quiz.items[qi].picked = Number(input.value);
    form.querySelectorAll(`input[name="q${qi}"]`).forEach(r => r.closest('.opt').classList.toggle('on', r.checked));
    document.getElementById('q' + qi).classList.remove('missing');
    const done = quiz.items.filter(x => x.picked !== null).length;
    fill.style.width = (done / n * 100) + '%';
    prog.textContent = `${done} of ${n} answered`;
    if (done === n) notice.textContent = '';
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const firstMissing = quiz.items.findIndex(x => x.picked === null);
    if (firstMissing !== -1) {
      quiz.items.forEach((x, i) => document.getElementById('q' + i).classList.toggle('missing', x.picked === null));
      const left = quiz.items.filter(x => x.picked === null).length;
      notice.textContent = `Answer ${left === 1 ? 'the remaining question' : 'all ' + left + ' remaining questions'} before submitting.`;
      const card = document.getElementById('q' + firstMissing);
      card.scrollIntoView({ block: 'center' });
      card.querySelector('input').focus({ preventScroll: true });
      return;
    }
    result = { kind: quiz.kind, id: quiz.id, items: quiz.items, score: quiz.items.filter(x => x.picked === x.correct).length };
    location.hash = '#/results';
  });
}

function renderResults() {
  if (!result) { location.replace('#/'); return; }
  document.title = 'Quiz Results | TechResQ';
  const { items, score, kind, id } = result;
  const total = items.length, ratio = score / total;
  const headline = ratio === 1 ? 'Perfect rescue!' : ratio >= 0.6 ? 'Nice work, Rescuer!' : 'Good start, keep practicing';
  const sub = ratio === 1 ? 'You got every answer right. Your computer is in safe hands.'
    : ratio >= 0.6 ? 'You know the basics. Check the answers below to lock in the rest.'
    : 'No worries. Review the module, then try again. The questions will be shuffled.';
  const missed = [...new Set(items.filter(x => x.picked !== x.correct).map(x => x.m))];
  const retryHref = kind === 'module' ? '#/quiz/' + id : '#/quick';
  app.innerHTML = `
    <section class="results">
      <div class="mascot" aria-hidden="true"><div class="orb"></div><span class="eye l"></span><span class="eye r"></span></div>
      <p class="eyebrow">QUIZ COMPLETE</p>
      <h1>${headline}</h1>
      <div class="score"><span>YOUR SCORE</span><b>${score} / ${total}</b></div>
      <p class="sub">${sub}</p>
      <div class="hero-actions">
        <a class="btn" href="#/">Back to Home</a>
        <a class="btn btn-ghost" href="${retryHref}">${kind === 'module' ? 'Retake Quiz' : 'Try Another Random Quiz'}</a>
      </div>
      <div class="review">
        <h2>Your answers</h2>
        ${items.map((it, i) => {
          const ok = it.picked === it.correct;
          return `<article class="ritem">
            <p class="q">${i + 1}. ${esc(it.q)}</p>
            <p class="you">Your answer: ${esc(it.opts[it.picked])}<span class="badge ${ok ? 'ok' : 'no'}">${ok ? 'Correct' : 'Not quite'}</span></p>
            ${ok ? '' : `<p class="you">Correct answer: ${esc(it.opts[it.correct])}</p>`}
            <p class="why">${esc(it.why)}</p>
          </article>`;
        }).join('')}
        ${missed.length ? `<p class="again">Want a refresher? ${missed.map(mid => `<a href="#/module/${mid}">Module ${mid}: ${esc(moduleById(mid).title)}</a>`).join(' &middot; ')}</p>` : ''}
      </div>
    </section>`;
}

/* ---------- router ---------- */
function setActiveNav(key) {
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const page = parts[0], id = parseInt(parts[1], 10);
  let nav = 'home', scrollTo = null;

  if (page === 'module' && id) { renderModule(id); nav = 'modules'; }
  else if (page === 'quiz' && id) { renderQuiz('module', id); nav = 'quick'; }
  else if (page === 'quick') { renderQuiz('quick'); nav = 'quick'; }
  else if (page === 'results') { renderResults(); nav = 'quick'; }
  else if (page === 'modules') { renderHome(); nav = 'modules'; scrollTo = 'modules'; }
  else { renderHome(); }

  setActiveNav(nav);
  if (scrollTo) document.getElementById(scrollTo).scrollIntoView();
  else window.scrollTo(0, 0);
  app.focus({ preventScroll: true });
}

window.addEventListener('hashchange', route);
route();

// Clicking "Modules" / "Browse Modules" when the hash is already #/modules: scroll to the cards
document.addEventListener('click', e => {
  const a = e.target.closest('a[href="#/modules"]');
  if (a && location.hash === '#/modules') { e.preventDefault(); document.getElementById('modules')?.scrollIntoView(); }
});