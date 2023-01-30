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
* @returns {Info}
*/
export function get_info(image: Uint8Array): Info;
/**
*/
export class Info {
  free(): void;
/**
*/
  constructor();
/**
*/
  accessed: string;
/**
*/
  err: string;
/**
*/
  format: string;
/**
*/
  height: number;
/**
*/
  modified: string;
/**
*/
  size: number;
/**
*/
  status: boolean;
/**
*/
  width: number;
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

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_rect_free: (a: number) => void;
  readonly __wbg_get_rect_x: (a: number) => number;
  readonly __wbg_set_rect_x: (a: number, b: number) => void;
  readonly __wbg_get_rect_y: (a: number) => number;
  readonly __wbg_set_rect_y: (a: number, b: number) => void;
  readonly __wbg_get_rect_w: (a: number) => number;
  readonly __wbg_set_rect_w: (a: number, b: number) => void;
  readonly __wbg_get_rect_h: (a: number) => number;
  readonly __wbg_set_rect_h: (a: number, b: number) => void;
  readonly __wbg_res_free: (a: number) => void;
  readonly __wbg_get_res_status: (a: number) => number;
  readonly __wbg_set_res_status: (a: number, b: number) => void;
  readonly __wbg_get_res_res: (a: number, b: number) => void;
  readonly __wbg_info_free: (a: number) => void;
  readonly __wbg_get_info_status: (a: number) => number;
  readonly __wbg_set_info_status: (a: number, b: number) => void;
  readonly __wbg_get_info_err: (a: number, b: number) => void;
  readonly __wbg_set_info_err: (a: number, b: number, c: number) => void;
  readonly __wbg_get_info_format: (a: number, b: number) => void;
  readonly __wbg_set_info_format: (a: number, b: number, c: number) => void;
  readonly __wbg_get_info_modified: (a: number, b: number) => void;
  readonly __wbg_set_info_modified: (a: number, b: number, c: number) => void;
  readonly __wbg_get_info_accessed: (a: number, b: number) => void;
  readonly __wbg_set_info_accessed: (a: number, b: number, c: number) => void;
  readonly __wbg_get_info_size: (a: number) => number;
  readonly __wbg_set_info_size: (a: number, b: number) => void;
  readonly __wbg_get_info_height: (a: number) => number;
  readonly __wbg_set_info_height: (a: number, b: number) => void;
  readonly __wbg_get_info_width: (a: number) => number;
  readonly __wbg_set_info_width: (a: number, b: number) => void;
  readonly info_new: () => number;
  readonly res_new: () => number;
  readonly rect_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_set_res_err: (a: number, b: number, c: number) => void;
  readonly __wbg_set_res_res: (a: number, b: number, c: number) => void;
  readonly __wbg_get_res_err: (a: number, b: number) => void;
  readonly crop: (a: number, b: number, c: number) => number;
  readonly get_info: (a: number, b: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
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
