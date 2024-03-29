const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const RedirectWebpackPlugin = require("redirect-webpack-plugin");
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
          test: /\.js$/,
          use: "babel-loader",
          include: [
            path.join(__dirname, "components"),
            path.join(__dirname, "layouts"),
            path.join(__dirname, "node_modules", "@react-finland"),
            path.join(__dirname, "pages"),
          ],
        },
        {
          test: /\.woff(2)?|\.ttf$|\.eot$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 5000,
              },
            },
          ],
        },
        {
          test: /\.gif$/,
          use: "file-loader",
        },
        {
          test: /\.(jpg|jpeg)$/,
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
          use: "page-loader",
        },
      ],
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "assets"),
        img: path.resolve(__dirname, "assets/img"),
        config: path.resolve(__dirname, "antwar.config.js"), // XXX: styleguidist
        components: path.resolve(__dirname, "components"),
        utils: path.resolve(__dirname, "utils"),
      },
    },
    resolveLoader: {
      alias: {
        "page-loader": path.resolve(__dirname, "loaders/page-loader.js"),
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
      new webpack.DefinePlugin({
        window: `false`,
      }),
      new RedirectWebpackPlugin({
        redirects: {
          organizers: "/about/",
          presentations: "/speakers/",
          talks: "/speakers/",
          // schedule: "/2021/schedule/",
          // speakers: "/2021/speakers/",
          // workshops: "/2021/workshops/",
        },
      }),
    ],
  };
}
