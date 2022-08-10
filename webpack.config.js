const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext]"
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "assets/style/[name].css"
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    historyApiFallback: true,
    compress: true,
    port: 3005,
    open: true
  }
};