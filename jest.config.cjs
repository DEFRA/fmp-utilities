module.exports = async () => {
  const config = {
    coverageThreshold: {
      global: {
        branches: 95,
        functions: 95,
        lines: 95,
        statements: -10
      }
    },
    collectCoverage: false,
    collectCoverageFrom: ['./**/*.js', './**/*.cjs'],
    coverageReporters: [
      'lcov',
      'text'
    ],
    testPathIgnorePatterns: [
      '__mocks__'
    ],
    coveragePathIgnorePatterns: [
      '/product-four/generateReferenceNumber',
      '/coverage',
      '/dist',
      'jest.config.cjs',
      'eslint.config.cjs'
    ],
    globals: {
      setImmediate
    }
  }
  return config
}
