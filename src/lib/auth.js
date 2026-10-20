// Helpers for the Cloudflare Pages Functions in functions/api (kept here so they are not served as a route).
// The owner's password lives in the Cloudflare secret ADMIN_PASSWORD; without it nothing can be saved.
const digest = async s => new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)));

export async function authorized(request, env) {
  const given = (request.headers.get("authorization") ?? "").replace(/^Bearer /, "");
  if (!env.ADMIN_PASSWORD || !given) return false;
  // compare hashes of equal length so the check takes the same time whatever was typed
  const [a, b] = await Promise.all([digest(given), digest(env.ADMIN_PASSWORD)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

export const json = (body, status = 200, headers = {}) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", ...headers } });

// slows down password guessing a little
export const refuse = async () => { await new Promise(r => setTimeout(r, 800)); return json({ error: "Kata sandi salah." }, 401); };
