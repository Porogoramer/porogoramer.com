/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    "swiper/*": "<rootDir>/src/__mocks__/swiper-react.js"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.mjs?$": "babel-jest"
  },
  testMatch: [
    "**/?(*.)+(test|spec).[jt]s?(x)",
    "**/?(*.)+(test|spec).mjs"
  ],
  transformIgnorePatterns: [
    "node_modules/(?!sinon)"
  ]
};
  
module.exports = config;