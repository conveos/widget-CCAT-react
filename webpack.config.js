// var path = require("path");

// module.exports = {
//     mode: "production",
//     entry: "./src/index.js",
//     output: {
//       path: path.resolve("build"),
//       filename: "index.js",
//       libraryTarget: "commonjs2"
//     },
//     module: {
//       rules: [
//         { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader']
//         }
//       ]
//     },
//     externals: {
//       react: "react"
//     }
  // };


  const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), // Ensures the correct directory path
    filename: "index.js",
    libraryTarget: "commonjs2" // Ensure this is appropriate for your use case
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // Ensure your Babel configuration is appropriate
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // Consider alternatives for library builds
      }
    ]
  },
  externals: {
    react: "react" // Ensure React is intended to be external
  }
};
