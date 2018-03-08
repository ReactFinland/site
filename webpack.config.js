const path = require("path");
const webpack = require("webpack");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
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
    mode: "development",
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
        config: path.resolve(__dirname, "antwar.config.js"), // XXX: styleguidist
        components: path.resolve(__dirname, "components"),
        utils: path.resolve(__dirname, "utils"),
      },
    },
  };
}

function interactiveConfig() {
  return {
    mode: "production",
    resolve: {
      alias: {
        react: "preact-compat",
        "react-dom": "preact-compat",
      },
    },
  };
}

function developmentConfig() {
  return {
    // https://stackoverflow.com/a/48082383/228885
    externals: {
      "node-fetch": "fetch",
    },
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
    mode: "production",
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
      new webpack.DefinePlugin({
        window: `false`,
      }),
      new RedirectWebpackPlugin({
        redirects: {
          organizers: "/about/",
          presentations: "/speakers/",
          talks: "/speakers/",
        },
      }),
    ],
  };
}
