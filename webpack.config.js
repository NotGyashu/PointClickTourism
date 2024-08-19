const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createProxyMiddleware } = require("http-proxy-middleware");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/", // Output directory for images
              publicPath: "/images/", // Public URL of the output directory
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    watchFiles: ["src/**/*.{js,jsx,css}"],
    historyApiFallback: true,
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.use(
        "/api", 
        createProxyMiddleware({
          target: "http://localhost:4001",//backend URL
          changeOrigin: true,
          pathRewrite: {
            "^/api": "", 
          },
        })
      );
      return middlewares;
    },
  },
  cache: false,
};
