var path = require('path')
module.exports = function(env) {
  console.log(env)
  return require(path.join(__dirname, `webpack.${env}.js`))
}