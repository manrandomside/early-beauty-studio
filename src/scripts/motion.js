export const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Reveal on scroll, once: sections rise with their siblings staggered, headings slide up line by line.
// Content stays visible without JS because the hidden state only applies under html.js.
export function initReveal() {
  document.querySelectorAll(".s-head h2").forEach(h => {
    h.innerHTML = [...h.childNodes].filter(n => n.textContent.trim()).map(n => `<span class="ml"><span>${n.nodeType === 3 ? n.textContent.trim() : n.outerHTML}</span></span>`).join("");
    h.classList.add("mlw");
  });
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("on");
    io.unobserve(e.target);
  }), { threshold: .2 });
  document.querySelectorAll(".rv").forEach(el => {
    const sib = [...el.parentElement.children].filter(c => c.classList.contains("rv"));
    el.style.setProperty("--d", sib.indexOf(el) * .12 + "s");
    io.observe(el);
  });
  document.querySelectorAll(".mlw").forEach(h => io.observe(h));
}

// Runs fn once when el first scrolls into view.
export function onceVisible(el, fn) {
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); fn(); } }, { threshold: .2 });
  io.observe(el);
}
