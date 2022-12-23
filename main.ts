const wasmCode = await Deno.readFile('./app/rs/pkg/rs_bg.wasm')
const wasmModule = new WebAssembly.Module(wasmCode)
const wasmInstance = new WebAssembly.Instance(wasmModule)

const main = wasmInstance.exports.main as CallableFunction
console.log(main())

// stopped:
// https://deno.land/manual@v1.29.1/runtime/webassembly/using_wasm
// https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Instance/Instance

