const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
 		entry:['./src/index.js', './src/main.css', './src/style.css'],
    output: {
      filename: 'main.js',
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'assets/[hash][ext][query]'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'src', 'assets', 'WeatherIcon.png'),
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
          }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/,
          type: 'asset/resource',
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },
      ]
    }
  }
