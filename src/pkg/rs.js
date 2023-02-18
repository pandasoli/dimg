
let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {Uint8Array} img
* @param {number} way
* @param {Size} new_dims
* @returns {Res}
*/
export function resize(img, way, new_dims) {
    const ptr0 = passArray8ToWasm0(img, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(new_dims, Size);
    var ptr1 = new_dims.ptr;
    new_dims.ptr = 0;
    const ret = wasm.resize(ptr0, len0, way, ptr1);
    return Res.__wrap(ret);
}

/**
* @param {Uint8Array} img
* @param {Rect} new_dims
* @returns {Res}
*/
export function crop(img, new_dims) {
    const ptr0 = passArray8ToWasm0(img, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(new_dims, Rect);
    var ptr1 = new_dims.ptr;
    new_dims.ptr = 0;
    const ret = wasm.crop(ptr0, len0, ptr1);
    return Res.__wrap(ret);
}

/**
* @param {Uint8Array} img
* @param {number} deg
* @returns {Res}
*/
export function rotate(img, deg) {
    const ptr0 = passArray8ToWasm0(img, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rotate(ptr0, len0, deg);
    return Res.__wrap(ret);
}

/**
* @param {Uint8Array} img
* @param {number} dir
* @returns {Res}
*/
export function flip(img, dir) {
    const ptr0 = passArray8ToWasm0(img, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.flip(ptr0, len0, dir);
    return Res.__wrap(ret);
}

/**
*/
export const ResizeWays = Object.freeze({ Deform:0,"0":"Deform",Cut:1,"1":"Cut", });
/**
*/
export const Direction = Object.freeze({ Horizontal:0,"0":"Horizontal",Vertical:1,"1":"Vertical", });
/**
*/
export const Degrees = Object.freeze({ NineTen:0,"0":"NineTen",OneHundredAndEighty:1,"1":"OneHundredAndEighty",TwoHundredAndSeventy:2,"2":"TwoHundredAndSeventy", });
/**
*/
export class Rect {

    static __wrap(ptr) {
        const obj = Object.create(Rect.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rect_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_rect_x(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_rect_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_rect_y(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_rect_y(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get w() {
        const ret = wasm.__wbg_get_rect_w(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set w(arg0) {
        wasm.__wbg_set_rect_w(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get h() {
        const ret = wasm.__wbg_get_rect_h(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set h(arg0) {
        wasm.__wbg_set_rect_h(this.ptr, arg0);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} w
    * @param {number} h
    */
    constructor(x, y, w, h) {
        const ret = wasm.rect_new(x, y, w, h);
        return Rect.__wrap(ret);
    }
}
/**
*/
export class Res {

    static __wrap(ptr) {
        const obj = Object.create(Res.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_res_free(ptr);
    }
    /**
    * @returns {boolean}
    */
    get status() {
        const ret = wasm.__wbg_get_res_status(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} arg0
    */
    set status(arg0) {
        wasm.__wbg_set_res_status(this.ptr, arg0);
    }
    /**
    * @returns {string}
    */
    get err() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_res_err(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} arg0
    */
    set err(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_res_err(this.ptr, ptr0, len0);
    }
    /**
    * @returns {Uint8Array}
    */
    get res() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_res_res(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Uint8Array} arg0
    */
    set res(arg0) {
        const ptr0 = passArray8ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_res_res(this.ptr, ptr0, len0);
    }
    /**
    */
    constructor() {
        const ret = wasm.res_new();
        return Res.__wrap(ret);
    }
}
/**
*/
export class Size {

    static __wrap(ptr) {
        const obj = Object.create(Size.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_size_free(ptr);
    }
    /**
    * @returns {number}
    */
    get w() {
        const ret = wasm.__wbg_get_rect_x(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set w(arg0) {
        wasm.__wbg_set_rect_x(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get h() {
        const ret = wasm.__wbg_get_rect_y(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set h(arg0) {
        wasm.__wbg_set_rect_y(this.ptr, arg0);
    }
    /**
    * @param {number} w
    * @param {number} h
    */
    constructor(w, h) {
        const ret = wasm.size_new(w, h);
        return Size.__wrap(ret);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = new Int32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('rs_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
