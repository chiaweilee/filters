const { expect } = require('chai')

const test = (plugin, argv, result) => it(`${plugin}`, () => {
  expect(require(`../src/${plugin}`).apply(null, argv)).to.equal(result)
})

describe('filters', () => {
  test('capitalize', [ 'hello world!' ], 'Hello world!')
  test('percentage', [ '0.251' /* should render correctly when input is a string of number */ ], '25%')
})
