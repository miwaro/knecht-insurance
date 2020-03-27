// // const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const path = require('path')

// module.exports = {
//   mode: 'production',
//   entry: {
//     app: [
//       // './src/css/style.css',
//       '@babel/polyfill',
//       './src/js/script.js',
//       './src/js/emailer.js'  
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'app.bundle.js'
//   },
//   // plugins: [new MiniCssExtractPlugin()],
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-env']
//         }
//       }
//       // {
//       //   test: /\.css$/,
//       //   use: [
//       //     // { loader: MiniCssExtractPlugin.loader },
//       //     {
//       //       loader: 'css-loader', options: {
//       //         sourceMap: true, modules: true, url: false
//       //       }
//       //     },
//       //     {
//       //       loader: 'postcss-loader',
//       //       options: {
//       //         sourceMap: true,
//       //         config: {
//       //           path: 'postcss.config.js'
//       //         }
//       //       }
//       //     }
//       //   ]
//       // }
//     ]
//   }
// }