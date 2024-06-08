const path = require('path')

module.exports = {
  entry: './dist-tsc/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'dist-tsc'),
    },
  },
}
