import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.B5nT-XC-.js","_app/immutable/chunks/scheduler.Dnz8ZsAA.js","_app/immutable/chunks/index.cD3UBkeq.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/4.DFklNFlY.css"];
export const fonts = [];
