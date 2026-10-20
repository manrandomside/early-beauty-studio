import { clean } from "../../src/lib/announce.js";
import { authorized, json, refuse } from "../../src/lib/auth.js";

const KEY = "current";
const OFF = { on: false, text: "", from: "", to: "" };

// the site reads this on every page; visitors may see a change up to a minute late
export async function onRequestGet({ env }) {
  const a = (await env.ANNOUNCE?.get(KEY, "json")) ?? OFF;
  return json(a, 200, { "cache-control": "public, max-age=60" });
}

// the admin page saves here
export async function onRequestPut({ request, env }) {
  if (!(await authorized(request, env))) return refuse();
  if (!env.ANNOUNCE) return json({ error: "Penyimpanan belum disambungkan di Cloudflare." }, 500);
  let a;
  try { a = clean(await request.json()); } catch (e) { return json({ error: e.message }, 400); }
  await env.ANNOUNCE.put(KEY, JSON.stringify(a));
  return json(a);
}
