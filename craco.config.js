const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  webpack: {
    alias: {
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/features': path.resolve(__dirname, 'src/features'),
      '@/context': path.resolve(__dirname, 'src/context'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/routes': path.resolve(__dirname, 'src/routes'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/test': path.resolve(__dirname, 'src/test'),
      '@/services': path.resolve(__dirname, 'src/services'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      testEnvironment: "node",
      moduleNameMapper: {
        ...paths,
        "axios": "axios/dist/node/axios.cjs"
      },
      collectCoverageFrom: [
          "src/**/*.{ts, tsx, js, jsx}"
      ]
    },
  },
};