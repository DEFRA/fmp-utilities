const { signToken } = require('./signToken.cjs')
const { extractTokenValue } = require('./extractTokenValue.cjs')

module.exports = {
  signToken,
  extractTokenValue
}
