import { customAlphabet } from 'nanoid'
const generateReferenceNumber = customAlphabet('123456789ABCDEFGHJKMNPRTUVWXY', 12)
export { generateReferenceNumber }
