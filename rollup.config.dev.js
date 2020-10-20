/* eslint-disable no-undef */
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outUmdPath = path.resolve(__dirname, './dist/myView.js')
const outEsPath = path.resolve(__dirname, './dist/myView.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outUmdPath,
      format: 'umd',
      name: 'myView',
      globals: {
        vue: 'Vue',
      },
    },
    {
      file: outEsPath,
      format: 'es',
      globals: {
        vue: 'Vue',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        [
          '@babel/transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    }),
    json(),
    vue(),
    postcss({
      plugins: [],
    }),
  ],
  external: ['vue'],
}
