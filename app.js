/* 홈페이지를 그려 주는 파일입니다. 내용은 content.js 에서 바꾸세요. (이 파일은 고치지 않아도 됩니다) */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const S = SITE;

function head(icon, title, text) {
  return `<div class="sec-head reveal"><div class="icon">${icon}</div><h2>${esc(title)}</h2>${text ? `<p>${esc(text)}</p>` : ""}</div>`;
}

const sections = [];

// 맨 위 큰 사진
sections.push({
  id: "top", menu: "홈",
  html: `<section class="hero" id="top">
    <div class="hero-bg" style="background-image:url('${esc(S.hero.photo)}')"></div>
    <div class="wrap">
      <h1>${esc(S.hero.title)}</h1>
      <p>${esc(S.hero.text)}</p>
      <div class="hero-btns">
        ${S.enroll.show ? `<a class="btn btn-main" href="#enroll">${esc(S.hero.button1)} 🌿</a>` : ""}
        ${S.story.show ? `<a class="btn btn-ghost" href="#story">${esc(S.hero.button2)} ♡</a>` : ""}
      </div>
    </div>
    <a class="scroll-hint" href="#${S.day.show ? "day" : "about"}" aria-label="아래로">⌄</a>
  </section>`,
});

if (S.day.show) sections.push({
  id: "day", menu: S.day.title,
  html: `<section class="block" id="day"><div class="wrap">
    ${head("🌱", S.day.title, S.day.text)}
    <div class="day-photos reveal">${S.day.photos.map((p) => `<img src="${esc(p)}" alt="">`).join("")}</div>
    <div class="badges reveal">${S.day.badges.map((b) => `<span class="badge">${esc(b.icon)} ${esc(b.text)}</span>`).join("")}</div>
  </div></section>`,
});

if (S.about.show) sections.push({
  id: "about", menu: S.about.title,
  html: `<section class="block" id="about"><div class="wrap">
    ${head("🏡", S.about.title)}
    <div class="about">
      <div class="about-photo reveal">${S.chatbot && S.chatbot.link && S.chatbot.aboutPhotoLink
        ? `<a class="chat-photo" href="${esc(S.chatbot.link)}" target="_blank" rel="noopener" title="${esc(S.chatbot.label)} 열기"><img src="${esc(S.about.photo)}" alt="${esc(S.chatbot.label)} 열기"><span class="chat-hint">💬 캐릭터를 누르면 ${esc(S.chatbot.label)}이 열려요</span></a>`
        : `<img src="${esc(S.about.photo)}" alt="">`}</div>
      <div class="reveal">
        <h3>${esc(S.about.headline)}</h3>
        <p class="greet">${esc(S.about.greeting)}</p>
        <p class="sign">— ${esc(S.about.sign)}</p>
        <div class="highlights">${S.about.highlights.map((h) => `<div class="hl"><b>${esc(h.big)}</b><span>${esc(h.small)}</span></div>`).join("")}</div>
      </div>
    </div>
  </div></section>`,
});

if (S.edu.show) sections.push({
  id: "edu", menu: S.edu.title,
  html: `<section class="block" id="edu"><div class="wrap">
    ${head("🌳", S.edu.title)}
    <p class="quote reveal">${esc(S.edu.quote)}</p>
    <p class="edu-text reveal">${esc(S.edu.text)}</p>
    <div class="programs">${S.edu.programs.map((p, i) => `<div class="prog reveal">
      <div class="prog-img${p.photo ? " zoomable" : ""}" data-i="${i}">${p.photo ? `<img src="${esc(p.photo)}" alt="">` : esc(p.icon)}${p.more && p.more.length ? `<span class="prog-count">📷 ${p.more.length + 1}</span>` : ""}</div>
      <div class="prog-body"><h4>${esc(p.icon)} ${esc(p.name)}</h4><p>${esc(p.text)}</p></div>
    </div>`).join("")}</div>
  </div></section>`,
});

if (S.routine.show) sections.push({
  id: "routine", menu: "하루 일과",
  html: `<section class="block" id="routine"><div class="wrap">
    ${head("⏰", S.routine.title)}
    <div class="routine">${S.routine.items.map((r) => `<div class="r-item reveal">
      <div class="r-time">${esc(r.time)}</div><div class="r-dot"></div>
      <div class="r-body"><b>${esc(r.name)}</b><p>${esc(r.text)}</p></div>
    </div>`).join("")}</div>
  </div></section>`,
});

if (S.story.show) sections.push({
  id: "story", menu: S.story.title,
  html: `<section class="block" id="story"><div class="wrap">
    ${head("📷", S.story.title)}
    <div class="stories">${S.story.items.map((it) => `<div class="story reveal" data-src="${esc(it.photo)}" data-text="${esc(it.text)}">
      <img src="${esc(it.photo)}" alt="${esc(it.text)}"><p>${esc(it.text)}</p></div>`).join("")}</div>
    ${S.story.moreLink ? `<div class="more"><a class="btn btn-main" href="${esc(S.story.moreLink)}" target="_blank" rel="noopener">${esc(S.story.moreText)} →</a></div>` : ""}
  </div></section>`,
});

if (S.enroll.show) sections.push({
  id: "enroll", menu: S.enroll.title,
  html: `<section class="block" id="enroll"><div class="wrap">
    ${head("🎒", S.enroll.title)}
    <div class="enroll">
      ${S.enroll.recruitTitle ? `<div class="e-card e-recruit reveal"><h4>🌼 ${esc(S.enroll.recruitTitle)}</h4>
        <div class="recruit">${(S.enroll.recruit || []).map((r) => `<div><span class="r-tag">${esc(r.name)}</span><b>${esc(r.text)}</b></div>`).join("")}</div>
      </div>` : ""}
      <div class="e-card reveal"><h4>보육 시간</h4>
        <div class="hours">${S.enroll.hours.map((h) => `<div><span>${esc(h.name)}</span><b>${esc(h.time)}</b></div>`).join("")}</div>
      </div>
      <div class="e-card reveal"><h4>입소 절차</h4>
        <div class="steps">${S.enroll.steps.map((s) => `<span class="step">${esc(s)}</span>`).join('<span class="arrow">→</span>')}</div>
        <p class="e-note">${esc(S.enroll.note)}</p>
        <div class="call">
          ${S.phone ? `<a class="btn btn-main" href="tel:${esc(S.phone.replace(/[^0-9]/g, ""))}">📞 ${esc(S.phone)}</a>` : ""}
          ${S.links.waitlist ? `<a class="btn btn-ghost" style="border:1px solid var(--line)" href="${esc(S.links.waitlist)}" target="_blank" rel="noopener">${esc(S.links.waitlistText || "입소 신청")}</a>` : ""}
        </div>
      </div>
    </div>
  </div></section>`,
});

if (S.location.show) {
  const q = encodeURIComponent(S.address);
  const qName = encodeURIComponent(S.name);   // 카카오맵·네이버지도는 이름으로 찾으면 어린이집이 바로 나옴
  sections.push({
    id: "location", menu: S.location.title,
    html: `<section class="block" id="location"><div class="wrap">
      ${head("📍", S.location.title)}
      <div class="loc">
        ${S.location.showMap ? `<div class="map reveal"><iframe loading="lazy" src="https://maps.google.com/maps?q=${q}&z=16&output=embed" title="지도"></iframe><div class="map-label">🏫 ${esc(S.name)}</div></div>` : ""}
        <div class="loc-info reveal">
          <div class="loc-row"><small>주소</small><b>${esc(S.address)}${S.addressDetail ? " " + esc(S.addressDetail) : ""}</b></div>
          <div class="loc-row"><small>전화</small><b>${esc(S.phone)}</b></div>
          <div class="map-links">
            <a href="https://map.kakao.com/?q=${qName}" target="_blank" rel="noopener">카카오맵으로 보기</a>
            <a href="https://map.naver.com/p/search/${qName}" target="_blank" rel="noopener">네이버지도로 보기</a>
          </div>
        </div>
      </div>
    </div></section>`,
  });
}

/* ---------- 화면에 그리기 ---------- */
document.getElementById("main").innerHTML = sections.map((s) => s.html).join("");
document.getElementById("navList").innerHTML = sections.map((s) => `<li><a href="#${s.id}">${esc(s.menu)}</a></li>`).join("");

document.title = S.name;
document.querySelector('meta[name="description"]').content = S.description;
document.querySelector('meta[property="og:title"]').content = S.name;
document.querySelector('meta[property="og:description"]').content = S.description;
document.getElementById("brandName").textContent = S.name;
document.getElementById("brandSub").textContent = S.subName;
if (S.logo) document.getElementById("brandLogo").innerHTML = `<img src="${esc(S.logo)}" alt="">`;

document.getElementById("footName").textContent = S.name;
document.getElementById("footInfo").innerHTML = `${esc(S.address)}${S.addressDetail ? " " + esc(S.addressDetail) : ""}<br>☎ ${esc(S.phone)}`;
document.getElementById("footCopy").textContent = `© ${new Date().getFullYear()} ${S.name}`;
const linkNames = { blog: "블로그", instagram: "인스타그램", cafe: "카페·밴드", waitlist: S.links.waitlistText || "입소 신청" };
document.getElementById("footLinks").innerHTML = Object.entries(S.links)
  .filter(([k, u]) => u && k !== "waitlistText")
  .map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${linkNames[k] || k}</a>`)
  .join("");

/* 오른쪽 아래 떠 있는 캐릭터 → 양육상담 챗봇 */
if (S.chatbot && S.chatbot.link) {
  const fab = document.createElement("a");
  fab.className = "chat-fab";
  fab.href = S.chatbot.link;
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", `${S.chatbot.label} 열기`);
  fab.innerHTML = `<span class="chat-bubble">💬 ${esc(S.chatbot.label)}</span><span class="chat-char"><img src="${esc(S.chatbot.character)}" alt=""></span>`;
  // 캐릭터 그림 파일이 없으면 로고 캐릭터로 대신 보여 줌
  fab.querySelector("img").addEventListener("error", (e) => {
    if (S.logo && !e.target.src.endsWith(S.logo)) { e.target.src = S.logo; fab.classList.add("fallback"); }
  });
  document.body.appendChild(fab);
}

/* 마우스를 따라다니는 작은 분홍 하트 (마우스일 때만, 움직임 줄이기 설정이면 끔) */
if (S.hearts && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let lastHeart = 0;
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const now = performance.now();
    if (now - lastHeart < 45) return;
    lastHeart = now;
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = "♥";
    h.style.left = e.clientX + "px";
    h.style.top = e.clientY + "px";
    h.style.fontSize = 10 + Math.random() * 8 + "px";
    h.style.setProperty("--dx", (Math.random() * 30 - 15).toFixed(0) + "px");
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 950);
  }, { passive: true });
}

/* ---------- 움직임 ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 60);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const nav = document.getElementById("nav");
document.getElementById("menuBtn").addEventListener("click", () => {
  nav.classList.toggle("open");
  header.classList.add("solid");
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("on"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* 사진 크게 보기 — 사진이 여러 장이면 ‹ › 단추, 키보드 ← →, 휴대폰 밀기로 넘겨 봄 */
const lb = document.getElementById("lightbox");
let lbList = [], lbIdx = 0, lbText = "";
const lbShow = () => {
  lb.querySelector("img").src = lbList[lbIdx];
  lb.querySelector("p").textContent = lbText + (lbList.length > 1 ? `  (${lbIdx + 1} / ${lbList.length})` : "");
  lb.classList.toggle("multi", lbList.length > 1);
};
const lbOpen = (list, text) => { lbList = list; lbIdx = 0; lbText = text; lbShow(); lb.classList.add("open"); };
const lbMove = (d) => { if (lbList.length > 1) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); } };

document.querySelectorAll(".story").forEach((el) => el.addEventListener("click", () => lbOpen([el.dataset.src], el.dataset.text)));
document.querySelectorAll(".prog-img.zoomable").forEach((el) => el.addEventListener("click", () => {
  const p = S.edu.programs[el.dataset.i];
  lbOpen([p.photo, ...(p.more || [])], `${p.icon} ${p.name}`);
}));
lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); lbMove(-1); });
lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); lbMove(1); });
lb.addEventListener("click", () => lb.classList.remove("open"));
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") lb.classList.remove("open");
  if (e.key === "ArrowLeft") lbMove(-1);
  if (e.key === "ArrowRight") lbMove(1);
});
let touchX = null;
lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) > 40) { e.preventDefault(); lbMove(dx < 0 ? 1 : -1); }
});
