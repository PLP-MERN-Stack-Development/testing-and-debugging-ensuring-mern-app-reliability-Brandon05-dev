module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testMatch: ['**/src/tests/**/*.test.js', '**/src/tests/**/*.test.jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};
