import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

// an element counts as seen once its top passes 82% of the screen height, so on phones
// the motion plays where the reader is looking instead of at the very bottom edge
const SEEN = "0px 0px -18% 0px";

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
  }), { rootMargin: SEEN });
  document.querySelectorAll(".rv").forEach(el => {
    const sib = [...el.parentElement.children].filter(c => c.classList.contains("rv"));
    el.style.setProperty("--d", sib.indexOf(el) * .12 + "s");
    io.observe(el);
  });
  document.querySelectorAll(".mlw").forEach(h => io.observe(h));
}

// Eased scrolling for mouse wheel and touch, with smooth anchor links.
// syncTouch can feel off on iOS older than 16; those phones are rare enough to accept.
let lenis = null;
export function initSmoothScroll() {
  if (REDUCE) return;
  lenis = new Lenis({ autoRaf: true, anchors: true, syncTouch: true });
}
export const scrollToEl = el => lenis ? lenis.scrollTo(el) : el.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });

// Runs fn once when el first scrolls into view.
export function onceVisible(el, fn) {
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); fn(); } }, { rootMargin: SEEN });
  io.observe(el);
}
