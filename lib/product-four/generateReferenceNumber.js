// Note this file is excluded from test coverage calculations
// as it is an ecma script module (because nanoid is ecma only)
// however it is fully covered by the fmp-api tests, which import it
// from here - transpiled to commonJS
import { customAlphabet } from 'nanoid'
const generateReferenceNumber = customAlphabet('123456789ABCDEFGHJKMNPRTUVWXY', 12)
export { generateReferenceNumber }
