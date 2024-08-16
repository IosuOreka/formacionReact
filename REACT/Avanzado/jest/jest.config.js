export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  };
  