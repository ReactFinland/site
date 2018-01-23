const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");

module.exports = env => {
  switch (env) {
    case "build":
      return merge(commonConfig(), buildConfig());
    case "interactive":
      return merge(commonConfig(), interactiveConfig());
    case "start":
    default:
      return merge(commonConfig(), developmentConfig());
  }
};

function commonConfig() {
  return {
    stats: "minimal",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          include: [
            path.join(__dirname, "components"),
            path.join(__dirname, "layouts"),
            path.join(__dirname, "node_modules", "@react-finland"),
            path.join(__dirname, "pages"),
          ],
        },
        {
          test: /\.woff(2)?$/,
          use:
            "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff",
        },
        {
          test: /\.ttf$|\.eot$/,
          use: "file-loader?prefix=font/",
        },
        {
          test: /\.gif$/,
          use: "file-loader",
        },
        {
          test: /\.jpg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: "file-loader",
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.txt$/,
          use: "raw-loader",
        },
        {
          test: /\.md$/,
          use: "raw-loader",
        },
      ],
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "assets"),
      },
    },
  };
}

function interactiveConfig() {
  return {
    resolve: {
      alias: {
        react: "preact-compat/dist/preact-compat.min.js",
        "react-dom": "preact-compat/dist/preact-compat.min.js",
      },
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  };
}

function developmentConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
  };
}

function buildConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            use: ["css-loader", "postcss-loader", "sass-loader"],
            fallback: "style-loader",
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].[chunkhash].css",
        allChunks: true,
      }),
      new CleanWebpackPlugin(["build"]),
      new webpack.DefinePlugin({
        window: `false`,
      }),
    ],
  };
}
