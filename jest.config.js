module.exports = {
  testTimeout: 30000,
  globals: {
    SERVER_URL: 'http://localhost:3000',
  },
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
  testEnvironment: 'node',
  //globalSetup: './tests/helpers/server/setup',
  //globalTeardown: './tests/helpers/server/teardown',
};