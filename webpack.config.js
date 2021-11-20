const path = require("path");
// console.log(path.join(__dirname, "public/scripts"));

module.exports = {
  entry: "./src/app.js",
  output: {
    // path: "C:/react-course-projects032021/indecision-app4/public"
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"], //node-sass will be work behind the screen
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};
