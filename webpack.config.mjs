import path from 'node:path'
const _dirname = path.dirname('./')

export default {
  entry: {
    index: ['./lib/index.cjs'],
    dates: ['./lib/dates/index.cjs'],
    'product-four': ['./lib/product-four/index.js'],
    secureUtils: ['./lib/secure-utils/index.cjs']
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
    extensions: ['.js', '.cjs'],
  },
  target: ['node']
}
