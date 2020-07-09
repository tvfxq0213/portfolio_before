// webpack.config.js
module.exports = {
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
           modifyVars: {
           'primary-color': '#961210',
           'link-color': '#961210',
           'border-radius-base': '2px',
         },
         javascriptEnabled: true,
       },
     },
    }],
    // ...other rules
  }],
  // ...other config
}