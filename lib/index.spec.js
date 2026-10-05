jest.mock('./product-four', () => ({
  generateReferenceNumber: jest.fn()
}))

const index = require('./index.cjs')

describe('index.cjs', () => {
  describe('module exports', () => {
    it('should export dates module', () => {
      expect(index.dates).toBeDefined()
    })

    it('should export productFour module', () => {
      expect(index.productFour).toBeDefined()
    })
  })

  describe('dates module', () => {
    it('should export formatUKTimeToMinute function', () => {
      expect(typeof index.dates.formatUKTimeToMinute).toBe('function')
    })

    it('should export formatUKDate function', () => {
      expect(typeof index.dates.formatUKDate).toBe('function')
    })

    it('should export formatUKDateTimeToMinute function', () => {
      expect(typeof index.dates.formatUKDateTimeToMinute).toBe('function')
    })

    it('should export formatUKDateTime function', () => {
      expect(typeof index.dates.formatUKDateTime).toBe('function')
    })

    it('should export formatUKDateTimeWithTimeZone function', () => {
      expect(typeof index.dates.formatUKDateTimeWithTimeZone).toBe('function')
    })

    it('should export calculateElapsedTime function', () => {
      expect(typeof index.dates.calculateElapsedTime).toBe('function')
    })

    it('should export markUpUkDate function', () => {
      expect(typeof index.dates.markUpUkDate).toBe('function')
    })

    it('should export formatUKLongDateTime function', () => {
      expect(typeof index.dates.formatUKLongDateTime).toBe('function')
    })

    it('should export formatReverseDate function', () => {
      expect(typeof index.dates.formatReverseDate).toBe('function')
    })

    it('should export formatReverseUkDateTime function', () => {
      expect(typeof index.dates.formatReverseUkDateTime).toBe('function')
    })

    it('should export MILLISECONDS constant', () => {
      expect(index.dates.MILLISECONDS).toBeDefined()
      expect(typeof index.dates.MILLISECONDS).toBe('object')
    })
  })

  describe('productFour module', () => {
    it('should export generateReferenceNumber function', () => {
      expect(typeof index.productFour.generateReferenceNumber).toBe('function')
    })
  })
})
