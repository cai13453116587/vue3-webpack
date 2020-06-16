const {smart} = require('webpack-merge')
const webpack = require('webpack')
const base = require("./webpack.base.config")


module.exports = smart(base,{
  devtool:'source-map',
  mode: 'production',
  plugins:[
    new webpack.DefinePlugin({
        DEV:JSON.stringify('production')
    })
   ]
})