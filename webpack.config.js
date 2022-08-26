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
    alias: {
      "@components": path.resolve(__dirname, 'src/components/'),
      "@containers": path.resolve(__dirname, 'src/containers/'),
      "@addons": path.resolve(__dirname, 'src/assets/images/addons/'),
      "@articles": path.resolve(__dirname, 'src/assets/images/articles/'),
      "@drinks": path.resolve(__dirname, 'src/assets/images/drinks_items/'),
      "@food": path.resolve(__dirname, 'src/assets/images/food_items/'),
      "@gallery": path.resolve(__dirname, 'src/assets/images/gallery_items/'),
    }
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
        test: /\.(png|jp(e*)g|svg|gif)$/,
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