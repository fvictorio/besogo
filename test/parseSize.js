const { expect } = require('chai')
const { parseSize } = require('../src/utils')

describe('parseSize', () => {
  it('should work with a single number', () => {
    const { x, y } = parseSize('19')

    expect(x).to.equal(19)
    expect(y).to.equal(19)
  })

  it('should work with a rectangular size', () => {
    const { x, y } = parseSize('9:15')

    expect(x).to.equal(9)
    expect(y).to.equal(15)
  })

  it('should default to 19 if the input is invalid', () => {
    const { x, y } = parseSize('foobar')

    expect(x).to.equal(19)
    expect(y).to.equal(19)
  })

  it('should default to 19 if the input is less than 1', () => {
    const { x, y } = parseSize('0')

    expect(x).to.equal(19)
    expect(y).to.equal(19)
  })

  it('should default to 19 if the input is greater than 52', () => {
    const { x, y } = parseSize('53')

    expect(x).to.equal(19)
    expect(y).to.equal(19)
  })
})
