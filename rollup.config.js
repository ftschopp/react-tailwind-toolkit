import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    external(),
    postcss(),
    resolve({
      extensions: ['.js', '.jsx', '.mjs'],
      browser: true,
      preferBuiltins: false,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
    }),
    commonjs(),
    image(),
    visualizer(),
  ],
};
