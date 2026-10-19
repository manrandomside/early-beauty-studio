import test from "node:test";
import assert from "node:assert/strict";
import { isOpen, holyDays, nailEstimate, DAY } from "./bali.js";
import { ADDS } from "../data/site.js";

// times are given in Bali time (UTC+8)
const bali = s => Date.parse(s + "+08:00");

test("open 10.00 to 17.00 Bali time", () => {
  assert.equal(isOpen(bali("2026-10-19T09:59")), false);
  assert.equal(isOpen(bali("2026-10-19T10:00")), true);
  assert.equal(isOpen(bali("2026-10-19T16:59")), true);
  assert.equal(isOpen(bali("2026-10-19T17:00")), false);
});

test("next Galungan and Kuningan", () => {
  const h = holyDays(bali("2026-10-19T12:00"));
  assert.equal(h.gal, Date.UTC(2027, 0, 13));
  assert.equal(h.kun, Date.UTC(2027, 0, 23));
  assert.equal(h.prev, Date.UTC(2026, 5, 17));
  // on Galungan day itself it stays on that day
  assert.equal(holyDays(bali("2027-01-13T08:00")).gal, Date.UTC(2027, 0, 13));
  assert.equal(h.bookBy, h.gal - 14 * DAY);
});

test("nail estimate from a gallery photo", () => {
  assert.equal(nailEstimate({ "Cat Eye": 10, "Chrome / Aurora": 6 }, ADDS), 72000);
  assert.equal(nailEstimate({}, ADDS), 40000);
});
