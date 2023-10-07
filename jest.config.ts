import type { Config } from '@jest/types';

const minCoverage = 95;

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.tsx', '!**/index.{ts,tsx}'],
  coveragePathIgnorePatterns: ['.stories.tsx'],
  moduleNameMapper: {
    '^@plick-test-utils$': '<rootDir>/src/plickTestUtils.ts',
  },
  coverageThreshold: {
    global: {
      branches: minCoverage,
      functions: minCoverage,
      lines: minCoverage,
      statements: minCoverage,
    },
  },
};

export default config;
