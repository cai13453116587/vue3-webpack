const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: path.resolve(__dirname,'../src/main.js'),
  output:{
    path:path.resolve(__dirname,'../dist'),
    publicPath:'/'
  },
  resolve:{
    alias:{
      'vue':'@vue/runtime-dom'
    }
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:['vue-loader']
      },{
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          },
        }
      },{
        test:/\.(png|jpg|jepg|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:8192
          }
        }
      },{

      },{
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },{
        test:/\.styl$/,
        use:[
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },{
        test:/\.(woff2?|eot|ttf|otf)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10000
          }
        }
      },{
        test:/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:10000
          }
        }
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template:'index.html',
      filename:'index.html'
    })
  ]
}