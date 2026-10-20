// Two languages, one set of pages: Indonesian lives at /, English at /en/. Copy is written in Indonesian in the
// components and looked up in EN for English; a missing entry falls back to Indonesian (the test lists any gaps).
import { EN } from "./en.js";

export const langOf = url => (/^\/en(\/|$)/.test(url.pathname) ? "en" : "id");
export const tr = (lang, s) => (lang === "en" ? EN[s] ?? s : s);
// "/harga/" in the current language: "/en/harga/" for English
export const link = (lang, path) => (lang === "en" ? "/en" + path : path);
// the same page in the other language
export const twin = (lang, path) => (lang === "en" ? path : "/en" + path);
export const locale = lang => (lang === "en" ? "en-GB" : "id-ID");
// for client scripts: the page language as set on <html lang>
export const pageLang = () => (document.documentElement.lang === "en" ? "en" : "id");
