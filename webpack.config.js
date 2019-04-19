var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var isDev = process.argv.indexOf("-p") === -1;
var config = {
  context: __dirname + "/src",
  entry: {
    main: "./index.js"
  },
  output: {
    path: __dirname + "/deploy",
    filename: "[name]-[hash:6].js"
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        query: {
          presets: ["@babel/preset-env", "@babel/react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loaders: [
          require.resolve("style-loader"),
          require.resolve("css-loader")
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ["url-loader?limit=100000"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
if (isDev) {
  config.devtool = "eval-source-map";
} else {
  config.plugins.push(
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  );
}
module.exports = config;