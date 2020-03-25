const { expect } = require('chai')
const { parseSgf } = require('../src/sgf')

describe('parseSgf', () => {
  it('should parse a minimal sgf', () => {
    const sgf = `
      (;FF[4]
      CA[UTF-8]
      GM[1]
      SZ[19])
    `

    const parsed = parseSgf(sgf)

    expect(parsed.props.length).to.equal(4)
    expect(parsed.props[0]).to.deep.equal({ id: 'FF', values: ['4'] })
    expect(parsed.props[1]).to.deep.equal({ id: 'CA', values: ['UTF-8'] })
    expect(parsed.props[2]).to.deep.equal({ id: 'GM', values: ['1'] })
    expect(parsed.props[3]).to.deep.equal({ id: 'SZ', values: ['19'] })
  })

  it('should parse a complete 9x9 game', () => {
    const sgf = `
      (;FF[4]
      CA[UTF-8]
      GM[1]
      SZ[9]
      ;B[cg]
      (;W[fe]
      (;B[dc]
      (;W[fc]
      (;B[ef]
      (;W[ff]
      (;B[fg]
      (;W[gg]
      (;B[fh]
      (;W[gh]
      (;B[eg]
      (;W[eb]
      (;B[db]
      (;W[ed]
      (;B[de]
      (;W[dd]
      (;B[cd]
      (;W[ee]
      (;B[df]
      (;W[ec]
      (;B[cc]
      (;W[ea]
      (;B[da]
      (;W[fi]
      (;B[ei]
      (;W[gi]
      (;B[]
      (;W[]
    ))))))))))))))))))))))))))))
    `

    const parsed = parseSgf(sgf)

    expect(parsed.props.length).to.equal(4)
    expect(parsed.props[0]).to.deep.equal({ id: 'FF', values: ['4'] })
    expect(parsed.props[1]).to.deep.equal({ id: 'CA', values: ['UTF-8'] })
    expect(parsed.props[2]).to.deep.equal({ id: 'GM', values: ['1'] })
    expect(parsed.props[3]).to.deep.equal({ id: 'SZ', values: ['9'] })

    const moves = []
    let current = parsed.children[0]
    while (current) {
      expect(current.props.length).to.equal(1)
      expect(current.props[0].values.length).to.equal(1)
      moves.push({
        player: current.props[0].id,
        position: current.props[0].values[0],
      })
      current = current.children[0]
    }

    expect(moves).to.deep.equal([
      {
        player: 'B',
        position: 'cg',
      },
      {
        player: 'W',
        position: 'fe',
      },
      {
        player: 'B',
        position: 'dc',
      },
      {
        player: 'W',
        position: 'fc',
      },
      {
        player: 'B',
        position: 'ef',
      },
      {
        player: 'W',
        position: 'ff',
      },
      {
        player: 'B',
        position: 'fg',
      },
      {
        player: 'W',
        position: 'gg',
      },
      {
        player: 'B',
        position: 'fh',
      },
      {
        player: 'W',
        position: 'gh',
      },
      {
        player: 'B',
        position: 'eg',
      },
      {
        player: 'W',
        position: 'eb',
      },
      {
        player: 'B',
        position: 'db',
      },
      {
        player: 'W',
        position: 'ed',
      },
      {
        player: 'B',
        position: 'de',
      },
      {
        player: 'W',
        position: 'dd',
      },
      {
        player: 'B',
        position: 'cd',
      },
      {
        player: 'W',
        position: 'ee',
      },
      {
        player: 'B',
        position: 'df',
      },
      {
        player: 'W',
        position: 'ec',
      },
      {
        player: 'B',
        position: 'cc',
      },
      {
        player: 'W',
        position: 'ea',
      },
      {
        player: 'B',
        position: 'da',
      },
      {
        player: 'W',
        position: 'fi',
      },
      {
        player: 'B',
        position: 'ei',
      },
      {
        player: 'W',
        position: 'gi',
      },
      {
        player: 'B',
        position: '',
      },
      {
        player: 'W',
        position: '',
      },
    ])
  })

  it('should parse a 19x19 game with variations', () => {
    const sgf = `
      (;FF[4]
      CA[UTF-8]
      GM[1]
      SZ[19]
      ;B[dd]
      (;W[pd]
      ;B[dp]
      ;W[pp]
      )(;W[dp]
      ;B[pp]
      (;W[pd]
      )(;W[qq]
      ;B[qp]
      ;W[pq]
      )))
    `

    const parsed = parseSgf(sgf)

    expect(parsed.props.length).to.equal(4)
    expect(parsed.props[0]).to.deep.equal({ id: 'FF', values: ['4'] })
    expect(parsed.props[1]).to.deep.equal({ id: 'CA', values: ['UTF-8'] })
    expect(parsed.props[2]).to.deep.equal({ id: 'GM', values: ['1'] })
    expect(parsed.props[3]).to.deep.equal({ id: 'SZ', values: ['19'] })

    expect(parsed.children[0].props[0]).to.deep.equal({
      id: 'B',
      values: ['dd'],
    })
    expect(parsed.children[0].children[0].props[0]).to.deep.equal({
      id: 'W',
      values: ['pd'],
    })
    expect(parsed.children[0].children[0].children[0].props[0]).to.deep.equal({
      id: 'B',
      values: ['dp'],
    })
    expect(
      parsed.children[0].children[0].children[0].children[0].props[0],
    ).to.deep.equal({ id: 'W', values: ['pp'] })
    expect(parsed.children[0].children[1].props[0]).to.deep.equal({
      id: 'W',
      values: ['dp'],
    })
    expect(parsed.children[0].children[1].children[0].props[0]).to.deep.equal({
      id: 'B',
      values: ['pp'],
    })
    expect(
      parsed.children[0].children[1].children[0].children[0].props[0],
    ).to.deep.equal({ id: 'W', values: ['pd'] })
    expect(
      parsed.children[0].children[1].children[0].children[1].props[0],
    ).to.deep.equal({ id: 'W', values: ['qq'] })
    expect(
      parsed.children[0].children[1].children[0].children[1].children[0]
        .props[0],
    ).to.deep.equal({ id: 'B', values: ['qp'] })
    expect(
      parsed.children[0].children[1].children[0].children[1].children[0]
        .children[0].props[0],
    ).to.deep.equal({ id: 'W', values: ['pq'] })
  })
})
