module.exports = {
  testTimeout: 30000,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>//reports//coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'components/**/*.js', 
    'services/**/*.js',
    'graphql/**/**/*.js',
    'pages/api/**/**/*.js',
    '!tests/**/**.test.js'
  ],
  globals: {
    SERVER_URL: 'http://localhost:3000',
  },
  testEnvironment: 'node',
  //globalSetup: './tests/helpers/server/setup',
  //globalTeardown: './tests/helpers/server/teardown',
};