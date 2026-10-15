module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                indentWidth: 4,
                includePaths: ["absolute/path/a", "absolute/path/b"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins : [
    new HtmlWebpackPlugin({
        title : 'Narae Portfolio',
        hash : true,
        filename : 'index.html',
        template: './public/index.html'
    }),
  ]
};