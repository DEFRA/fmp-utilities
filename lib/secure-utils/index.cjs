const { signToken } = require('./signToken.cjs')
const { extractTokenValue } = require('./extractTokenValue.cjs')
const { generateKeys } = require('./generateKeys.cjs')

module.exports = {
  signToken,
  extractTokenValue,
  generateKeys
}
