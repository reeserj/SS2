

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/builds/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.Cj6kOlcX.js","_app/immutable/chunks/scheduler.Dnz8ZsAA.js","_app/immutable/chunks/index.cD3UBkeq.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/5.Z3mEMJFf.css"];
export const fonts = [];
