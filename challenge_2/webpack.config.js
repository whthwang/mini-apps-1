// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client');
// var DIST_DIR = path.join(__dirname, '/static');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module : {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : SRC_DIR,
//         loader : 'babel-loader',
//         query: {
//           presets: ['react', 'env']
//        }
//       }
//     ]
//   }
// };


const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/index.jsx"),
  output: {
      path: path.resolve(__dirname, "./static"),
      filename: "bundle.js"
    },
	module: {
		rules: [{
        test: /\.js[x]?/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
} 