import { authorized, refuse } from "../../src/lib/auth.js";

// lets the admin page check the password before showing the form
export async function onRequestPost({ request, env }) {
  return (await authorized(request, env)) ? new Response(null, { status: 204 }) : refuse();
}
