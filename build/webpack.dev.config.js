const webpack = require('webpack');
const base = require('./webpack.base.config.js');
const {smart } = require('webpack-merge');


module.exports = smart (base,{
  mode: 'development',
  devServer:{
    inline:true,
    hot:true,
    stats:'minimal',
    overlay:true,
    publicPath:'/',
    historyApiFallback:true,
    port:8000
  },
  plugins:[
    new webpack.DefinePlugin({
      DEV:JSON.stringify('dev')
    })
  ]
})
