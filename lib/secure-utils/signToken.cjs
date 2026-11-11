const { createSign } = require('node:crypto')

// Keys are stored base64 encoded (see generateKeys.js), so decode them back to PEM
const fromBase64 = (key) => Buffer.from(key, 'base64').toString('utf8')

const signToken = (data, privateKey64Bit) => {
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url')
  const signature = createSign('SHA256').update(payload).sign({ key: fromBase64(privateKey64Bit), dsaEncoding: 'ieee-p1363' }, 'base64url')
  return `${payload}.${signature}`
}

module.exports = { signToken }
