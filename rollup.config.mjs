import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';

const config = [
  {
    input: './src/index.ts',
    output: [
      {
        file: "./dist/index.js",
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: "./dist/index.esm.js",
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: './dist/' }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
    ],
  },
  {
    input: './dist/dts/index.d.ts',
    output: [{ file: "./dist/index.d.ts", format: 'esm' }],
    plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/dts' })],
  },
];

export default config;