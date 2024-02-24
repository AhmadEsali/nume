const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
module.exports = {
  entry: "./src/index.js",
  mode: "development",

  output: {
    filename: "js/[name][contenthash].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve the 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 9000, // Specify port number
    open: true, // Open the default browser when the server starts
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files for production build.
          "css-loader", // Translates CSS into CommonJS.
          "postcss-loader", // PostCSS is used for autoprefixing CSS for better cross-browser support.
          "sass-loader", // Compiles SCSS to CSS.
        ],
      },
      {
        test: /\.js$/, // Process .js files with "babel-loader" excluding "node_modules".
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Use @babel/preset-env to transpile modern JavaScript to older versions for wider browser compatibility.
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Process image files with "asset/resource" type.
        type: "asset/resource",

      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Starter Template", // The title of the generated HTML file.
      filename: "index.html", // The name of the generated HTML file.
      template: "src/index.html", // Use the "template.html" file as the base for the generated HTML.
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name][contenthash].css", // CSS files will be saved in the "css" folder with hashed filenames for better caching.
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackInlineSVGPlugin({
        runPreEmit: true,
      }),
   // Clean the "dist" directory before each build to remove old files.
  ],

  watch: true,
};
