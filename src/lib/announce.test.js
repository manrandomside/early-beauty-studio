import { test } from "node:test";
import assert from "node:assert/strict";
import { clean, showNow } from "./announce.js";

test("clean keeps a valid announcement and trims the text", () => {
  assert.deepEqual(clean({ on: true, text: "  Libur Galungan  ", from: "2027-01-12", to: "2027-01-14" }),
    { on: true, text: "Libur Galungan", from: "2027-01-12", to: "2027-01-14" });
});
test("clean rejects empty or too long text, bad dates and reversed ranges", () => {
  assert.throws(() => clean({ on: true, text: "   " }));
  assert.throws(() => clean({ on: true, text: "x".repeat(161) }));
  assert.throws(() => clean({ on: true, text: "ok", from: "12/01/2027" }));
  assert.throws(() => clean({ on: true, text: "ok", from: "2027-01-14", to: "2027-01-12" }));
});
test("clean allows an empty text when the bar is off", () => {
  assert.deepEqual(clean({ on: false, text: "" }), { on: false, text: "", from: "", to: "" });
});
test("showNow respects the switch and the date range, in Bali days", () => {
  const a = { on: true, text: "Libur", from: "2027-01-12", to: "2027-01-14" };
  assert.equal(showNow(a, "2027-01-11"), false);
  assert.equal(showNow(a, "2027-01-12"), true);
  assert.equal(showNow(a, "2027-01-14"), true);
  assert.equal(showNow(a, "2027-01-15"), false);
  assert.equal(showNow({ ...a, on: false }, "2027-01-13"), false);
  assert.equal(showNow({ on: true, text: "Promo", from: "", to: "" }, "2030-05-05"), true);
  assert.equal(showNow(null, "2027-01-13"), false);
});
