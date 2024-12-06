/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.tsx?$": "babel-jest"
    }
  };
  
module.exports = config;