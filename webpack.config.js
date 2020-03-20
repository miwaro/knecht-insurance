const webpack = require('webpack');

module.exports = {
    entry: ['./src/css/style.css'],
    output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'style.css'
},
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        }
      ]
    }
}