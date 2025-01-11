

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Cd-FJk5J.js","_app/immutable/chunks/scheduler.Dnz8ZsAA.js","_app/immutable/chunks/index.cD3UBkeq.js","_app/immutable/chunks/entry.BJeJ-UwJ.js"];
export const stylesheets = [];
export const fonts = [];
