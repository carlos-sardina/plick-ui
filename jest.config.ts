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
};

export default config;