const path = require("path")

const config ={
  entry:{
    app : path.resolve(__dirname,"../src/main.js")
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },
  output :{
    path: path.resolve(__dirname,"../dist"),
    publicPath:"/",
    filename:"assets/js/[name].js"
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      },
    },
  }
}

module.exports = config
