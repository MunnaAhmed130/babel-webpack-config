const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",

  mode: "production",

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                  // below options handle polyfills
                  useBuiltIns: "usage",
                  corejs: "3.6.5",
                },
              ],
            ],
          },
        },
      },
    ],
  },

  plugins: [new BundleAnalyzerPlugin()],
};
