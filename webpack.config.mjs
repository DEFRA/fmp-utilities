import path from 'node:path'
const _dirname = path.dirname('./')

export default {
  entry: {
    index: ['./lib/index.js'],
    dates: ['./lib/dates/index.js'],
    'product-four': ['./lib/product-four/index.js']
  },
  mode: 'production',
  output: {
    filename: '[name].cjs',
    libraryTarget: 'umd',
    path: path.resolve(_dirname, 'dist')
  },
  plugins: [],
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.js'],
  },
  target: ['node']
}
