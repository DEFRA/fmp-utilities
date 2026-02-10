import path from 'path'
const __dirname = path.dirname('./')

export default {
  entry: {
    index: ['./lib/index.js'],
    dates: ['./lib/dates/index.js']
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
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
