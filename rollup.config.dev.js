/* eslint-disable no-undef */
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')

const inputPath = path.resolve(__dirname, './src/index.js')
const outUmdPath = path.resolve(__dirname, './lib/mms-ui.js')
const outEsPath = path.resolve(__dirname, './lib/mms-ui.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outUmdPath,
      format: 'umd',
      name: 'mms-ui',
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: outEsPath,
      format: 'es',
      globals: {
        vue: 'Vue'
      }
    }
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
            regenerator: true
          }
        ]
      ]
    }),
    json(),
    vue(),
    postcss({
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 version', '>1%', 'ios 7']
        })
      ]
    })
  ],
  external: ['vue', 'core-js']
}
