import { test } from "node:test";
import assert from "node:assert/strict";
import { EN } from "./en.js";
import { LASH, BASES, ADDS, REMOVES, SERVICES, CATS, PAGES, WORKS, COURSES, HOURS } from "../data/site.js";

// every piece of copy that comes from the data file must have an English version
test("all data copy has an English entry", () => {
  const copy = [
    ...LASH.map(l => l[2]), ...BASES.map(b => b[0]), ...ADDS.map(a => a[0]), ...REMOVES.map(r => r[0]),
    ...SERVICES, ...CATS, ...PAGES.map(p => p[0]), ...WORKS.map(w => w[0]), HOURS,
    ...COURSES.flatMap(c => [c.tag, ...c.pkg, ...c.meta, ...c.bonus, ...(c.materi ?? [])])
  ];
  const missing = [...new Set(copy)].filter(s => !(s in EN));
  assert.deepEqual(missing, []);
});
