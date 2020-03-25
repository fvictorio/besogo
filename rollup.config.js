import commonjs from 'rollup-plugin-commonjs'

const config = {
  input: 'src/besogo.js',
  output: {
    file: 'besogo.all.js',
    format: 'umd',
    name: 'besogo',
  },
  plugins: [commonjs()],
}

export default config
