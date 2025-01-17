

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D1H8Umye.js","_app/immutable/chunks/scheduler.Dnz8ZsAA.js","_app/immutable/chunks/index.cD3UBkeq.js"];
export const stylesheets = ["_app/immutable/assets/2.O1OMYN-z.css"];
export const fonts = [];
