import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!**/index.{ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '.stories.tsx',
  ],
  moduleNameMapper: {
    "^@plick-test-utils$": "<rootDir>/src/plickTestUtils.ts"
  }
};

export default config;