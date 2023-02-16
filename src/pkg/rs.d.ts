/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} image
* @param {Rect} new_dims
* @returns {Res}
*/
export function crop(image: Uint8Array, new_dims: Rect): Res;
/**
* @param {Uint8Array} image
* @param {number} deform
* @param {Size} new_dims
* @returns {Res}
*/
export function resize(image: Uint8Array, deform: number, new_dims: Size): Res;
/**
*/
export enum ResizeWays {
  Deform,
  Cut,
}
/**
*/
export class Rect {
  free(): void;
/**
* @param {number} x
* @param {number} y
* @param {number} w
* @param {number} h
*/
  constructor(x: number, y: number, w: number, h: number);
/**
*/
  h: number;
/**
*/
  w: number;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class Res {
  free(): void;
/**
*/
  constructor();
/**
*/
  err: string;
/**
*/
  res: Uint8Array;
/**
*/
  status: boolean;
}
/**
*/
export class Size {
  free(): void;
/**
* @param {number} w
* @param {number} h
*/
  constructor(w: number, h: number);
/**
*/
  h: number;
/**
*/
  w: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly crop: (a: number, b: number, c: number) => number;
  readonly __wbg_rect_free: (a: number) => void;
  readonly __wbg_get_rect_x: (a: number) => number;
  readonly __wbg_set_rect_x: (a: number, b: number) => void;
  readonly __wbg_get_rect_y: (a: number) => number;
  readonly __wbg_set_rect_y: (a: number, b: number) => void;
  readonly __wbg_get_rect_w: (a: number) => number;
  readonly __wbg_set_rect_w: (a: number, b: number) => void;
  readonly __wbg_get_rect_h: (a: number) => number;
  readonly __wbg_set_rect_h: (a: number, b: number) => void;
  readonly __wbg_size_free: (a: number) => void;
  readonly __wbg_res_free: (a: number) => void;
  readonly __wbg_get_res_status: (a: number) => number;
  readonly __wbg_set_res_status: (a: number, b: number) => void;
  readonly __wbg_get_res_err: (a: number, b: number) => void;
  readonly __wbg_set_res_err: (a: number, b: number, c: number) => void;
  readonly __wbg_get_res_res: (a: number, b: number) => void;
  readonly __wbg_set_res_res: (a: number, b: number, c: number) => void;
  readonly res_new: () => number;
  readonly rect_new: (a: number, b: number, c: number, d: number) => number;
  readonly size_new: (a: number, b: number) => number;
  readonly __wbg_set_size_h: (a: number, b: number) => void;
  readonly __wbg_get_size_w: (a: number) => number;
  readonly __wbg_set_size_w: (a: number, b: number) => void;
  readonly __wbg_get_size_h: (a: number) => number;
  readonly resize: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
