
const expect = require('chai').expect
const babel = require('babel-core')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('objects', () => {
  const babelResult = babel.transformFileSync(
    path.resolve(__dirname, '..', 'objects.js'), {
      presets: ['es2015']
    }
  )
  jsdom({
    src: babelResult.code
  })


playlist