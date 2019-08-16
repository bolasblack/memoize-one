// @flow
// @ts-check
import typescript from 'rollup-plugin-typescript';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const input = 'src/memoize-one.ts';

export default [
  // Universal module definition (UMD) build
  {
    input,
    output: {
      file: 'dist/memoize-one.js',
      format: 'umd',
      name: 'memoizeOne',
    },
    plugins: [
      // Setting development env before running babel etc
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      typescript(),
      // commonjs({ include: 'node_modules/**' }),
    ],
  },
  // Universal module definition (UMD) build (production)
  {
    input,
    output: {
      file: 'dist/memoize-one.min.js',
      format: 'umd',
      name: 'memoizeOne',
    },
    plugins: [
      // Setting production env before running babel etc
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      typescript(),
      // commonjs({ include: 'node_modules/**' }),
      uglify(),
    ],
  },
  // ESM build
  {
    input,
    output: {
      file: 'dist/memoize-one.esm.js',
      format: 'esm',
    },
    plugins: [typescript()],
  },
  // CommonJS build
  {
    input,
    output: {
      file: 'dist/memoize-one.cjs.js',
      format: 'cjs',
    },
    plugins: [typescript()],
  },
];
