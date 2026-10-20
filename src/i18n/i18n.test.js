import { test } from "node:test";
import assert from "node:assert/strict";
import { langOf, tr, link, twin } from "./index.js";

test("language comes from the path", () => {
  assert.equal(langOf(new URL("https://x.dev/en/harga/")), "en");
  assert.equal(langOf(new URL("https://x.dev/en/")), "en");
  assert.equal(langOf(new URL("https://x.dev/harga/")), "id");
  assert.equal(langOf(new URL("https://x.dev/enak/")), "id");
});
test("links and the language twin", () => {
  assert.equal(link("en", "/harga/"), "/en/harga/");
  assert.equal(link("id", "/harga/"), "/harga/");
  assert.equal(twin("id", "/"), "/en/");
  assert.equal(twin("en", "/kelas/"), "/kelas/");
});
test("Indonesian stays as written, English falls back when missing", () => {
  assert.equal(tr("id", "Harga"), "Harga");
  assert.equal(tr("en", "Harga"), "Prices");
  assert.equal(tr("en", "tidak ada di kamus"), "tidak ada di kamus");
});
