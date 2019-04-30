const HtmlWebPackPlugin = require("html-webpack-plugin");


const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
        test: /\.css$/
       },
      //  {
      //   test: /\.(pdf|jpg|png|gif|svg|ico)$/,
      //   use: [
      //       {
      //           loader: 'url-loader',
      //           options:{
      //             limit:5000
      //           }
      //       },
      //   ]
      // },
     
      {
        // ASSET LOADER
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader'
      },
    ]
  },
   devServer: {
        historyApiFallback: true,
  },
  plugins: [htmlPlugin]
};