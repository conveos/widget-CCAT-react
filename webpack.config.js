const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js", // Main component file
  mode : "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "Widget_CCAT_v2", // Change to your library's name
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom"
    },
    nodeExternals()
  ]
};
