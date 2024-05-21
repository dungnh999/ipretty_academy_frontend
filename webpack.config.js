const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
            {
              loader: "html-loader",
              options: { minimize : true}
            }
        ], exclude: /\.html$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        loader: "file-loader",
        test: /\.(eot|otf|png|svg|jpg|ttf|woff|woff2)(\?v=[0-9.]+)?$/
      },
      {
        test: /\.md$/i,
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
    ],
  },
  // optimization: {
  //   removeAvailableModules: false,
  //   removeEmptyChunks: false,
  //   splitChunks: false,
  //   minimizer: [
  //     new TerserPlugin({
  //       parallel: false,
  //       terserOptions: {
  //         ecma: 6,
  //       },
  //     }),
  //   ],
  // },
  devServer: {
    allowedHosts: "all",
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg', '.jpg'],
    fallback: {
      fs: false,
    },
    alias: {
      'academy': path.resolve(__dirname, 'src/'),
      'assets' : path.resolve(__dirname, 'src/assets/'),
    }
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename : 'index.html',
        hash: true,
        template: "./public/index.html",
        inject: true
      })
  ]
}
