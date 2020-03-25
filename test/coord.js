const { expect } = require('chai')
const { Coord } = require('../src/coord')

describe('coord', () => {
  it('none', () => {
    const { none } = Coord

    expect(none()).to.equal(false)
    expect(none(19, 19)).to.equal(false)
  })

  it('western', () => {
    const { western } = Coord

    const labels = western(19, 19)

    expect(labels.x.length).to.equal(20)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
    ])

    expect(labels.y.length).to.equal(20)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '19',
      '18',
      '17',
      '16',
      '15',
      '14',
      '13',
      '12',
      '11',
      '10',
      '9',
      '8',
      '7',
      '6',
      '5',
      '4',
      '3',
      '2',
      '1',
    ])
  })

  it('numeric', () => {
    const { numeric } = Coord

    const labels = numeric(19, 19)

    expect(labels.x.length).to.equal(20)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
    ])

    expect(labels.y.length).to.equal(20)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
    ])
  })

  it('pierre', () => {
    const { pierre } = Coord

    const labels = pierre(9, 9)

    expect(labels.x.length).to.equal(10)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      'a1',
      'a2',
      'a3',
      'a4',
      'a',
      'b4',
      'b3',
      'b2',
      'b1',
    ])

    expect(labels.y.length).to.equal(10)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      'a1',
      'a2',
      'a3',
      'a4',
      'd',
      'd4',
      'd3',
      'd2',
      'd1',
    ])
  })

  it('pierre (even size)', () => {
    const { pierre } = Coord

    const labels = pierre(10, 10)

    expect(labels.x.length).to.equal(11)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'b5',
      'b4',
      'b3',
      'b2',
      'b1',
    ])

    expect(labels.y.length).to.equal(11)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      'a1',
      'a2',
      'a3',
      'a4',
      'a5',
      'd5',
      'd4',
      'd3',
      'd2',
      'd1',
    ])
  })

  it('corner', () => {
    const { corner } = Coord

    const labels = corner(13, 13)

    expect(labels.x.length).to.equal(14)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      '6',
      '5',
      '4',
      '3',
      '2',
      '1',
    ])

    expect(labels.y.length).to.equal(14)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      'G',
      'F',
      'E',
      'D',
      'C',
      'B',
      'A',
    ])
  })

  it('eastcor', () => {
    const { eastcor } = Coord

    const labels = eastcor(13, 13)

    expect(labels.x.length).to.equal(14)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '6',
      '5',
      '4',
      '3',
      '2',
      '1',
    ])

    expect(labels.y.length).to.equal(14)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '七',
      '六',
      '五',
      '四',
      '三',
      '二',
      '一',
    ])
  })

  it('eastern', () => {
    const { eastern } = Coord

    const labels = eastern(13, 13)

    expect(labels.x.length).to.equal(14)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
    ])

    expect(labels.y.length).to.equal(14)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
      '十三',
    ])
  })

  it('eastern (huge board)', () => {
    const { eastern } = Coord

    const labels = eastern(25, 25)

    expect(labels.x.length).to.equal(26)
    expect(labels.x[0]).to.be.undefined
    expect(labels.x.slice(1)).to.deep.equal([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
    ])

    expect(labels.y.length).to.equal(26)
    expect(labels.y[0]).to.be.undefined
    expect(labels.y.slice(1)).to.deep.equal([
      '一',
      '二',
      '三',
      '四',
      '五',
      '六',
      '七',
      '八',
      '九',
      '十',
      '十一',
      '十二',
      '十三',
      '十四',
      '十五',
      '十六',
      '十七',
      '十八',
      '十九',
      '二十',
      '二十一',
      '二十二',
      '二十三',
      '二十四',
      '二十五',
    ])
  })
})
