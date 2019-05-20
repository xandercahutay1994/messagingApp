const path = require('path')
const nodeExternals = require('webpack-node-externals')//ignore content of node modules

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    // options: {
    //   presets: ['react', 'env'],
    //   plugins: ['transform-class-properties']
    // }
  }
}

const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    // 'app.js': path.resolve(__dirname, 'src/public/app.js')
    'app.js': path.resolve(__dirname, 'src/app.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: '[name]'
  }
}

const serverConfig = {
  mode: 'development',
  target: 'node', //exclude node when bundling module
  node: {
    __dirname: false
  },
  externals: [nodeExternals()], 
  entry: {
    'index.js': path.resolve(__dirname, 'src/server.js')
  },
  module: {
    rules: [js]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  }
}

module.exports = [serverConfig, clientConfig]