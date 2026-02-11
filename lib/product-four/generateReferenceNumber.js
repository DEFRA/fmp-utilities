// Note this file is excluded from test coverage calculations
// as it is an ecma script module (because nanoid is ecma only)
// however it is fully covered by the fmp-api tests, which import it
// from here - transpiled to commonJS
import { customAlphabet } from 'nanoid'
const referenceNumberLength = 12
const generateReferenceNumber = customAlphabet('123456789ABCDEFGHJKMNPRTUVWXY', referenceNumberLength)
export { generateReferenceNumber }
