export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(svg)$': 'jest-transformer-svg'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
  };