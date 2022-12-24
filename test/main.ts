import init, { main, crop, Cube } from '../rs/pkg/rs.js'

await init()
console.log( main() )

const dim = new Cube
dim.x = 2
dim.y = 2
dim.w = 10
dim.h = 10

crop(
  await Deno.readFile('images/lemon.svg'),
  dim
)

//await WebAssembly.instantiateStreaming(
//  fetch(
//    import.meta.resolve('../rs/pkg/rs_bg.wasm')
//  ),
//  {}
//)

// stopped:
// https://deno.land/manual@v1.29.1/runtime/webassembly/using_wasm
// https://developer.mozilla.org/en-US/docs/WebAssembly/JavaScript_interface/Instance/Instance

