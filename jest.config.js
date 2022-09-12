/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
    d3: '<rootDir>/node_modules/d3/dist/d3.min.js',
  },
  modulePathIgnorePatterns: ['templates'],
}
