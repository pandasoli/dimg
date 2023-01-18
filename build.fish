#!/usr/bin/fish

# Building
./rs/
wasm-pack build --target web
..

# Cleaning src/pkg
rm src/pkg/*

# Coping new files to src/pkg
set files_to_move\
  'rs.js'\
  'rs.d.ts'\
  'rs_bg.wasm'\
  'rs_bg.wasm.d.ts'

for file in $files_to_move
  cp rs/pkg/$file src/pkg/
end
