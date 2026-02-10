import path from 'node:path'
const _dirname = path.dirname('./')

export default {
  entry: {
    index: ['./lib/index.js'],
    dates: ['./lib/dates/index.js']
  },
  mode: 'production',
  output: {
    filename: '[name].js',
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
