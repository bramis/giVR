module.exports = {
  preset: 'react-360',
  rootDir: '../',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'pages/**/*.js',
    'components/**/*.js',
    '!src/**/*.stories.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/coverage',
  globals: {
    NODE_ENV: 'test'
  },
  testURL: 'http://localhost', // https://github.com/jsdom/jsdom/issues/2304
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  modulePaths: [
    './',
    '<rootDir>/pages/',
    '<rootDir>/components/',
    '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules',
    'pages',
    'componentes',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  setupFiles: ['<rootDir>/jest/jest.setup.js'],
};
