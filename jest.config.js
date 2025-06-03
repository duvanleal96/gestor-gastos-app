module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
  ],
  coverageReporters: ['text', 'html', 'lcov'],
  transformIgnorePatterns: [
    'node_modules/(?!(victory-native|react-native|@react-native|react-native-.*)/)',
  ],
};
