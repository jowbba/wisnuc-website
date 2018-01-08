var path = require('path')
module.exports = function(env) {
  return require(path.join(__dirname, `webpack.${env}.js`))
}