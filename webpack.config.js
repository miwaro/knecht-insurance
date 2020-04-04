const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: [
      '@babel/polyfill',
      './src/js/script.js',
      './src/js/emailer.js'  
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
    // path: path.resolve(__dirname, 'src'),
    // filename: 'src'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}