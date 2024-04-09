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
        test: /\.(js|jsx$)/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules|bower_components/,
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
    ],
  },
  devServer: {
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
