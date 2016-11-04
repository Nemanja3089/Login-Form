import path from 'path';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname,'./Client/index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'Client')

        ],
        loaders: [ 'babel' ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
}
}
