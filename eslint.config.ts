import tseslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  files: ['**/*.ts', '**/*.tsx'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [tseslint, react, 'react-native'],
  rules: {
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-invalid-regexp': 'error',
    'no-undef': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@services': './src/services',
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@helpers': './src/helpers',
          '@types': './src/types',
          '@api': './src/api',
          '@styles': './src/assets/styles',
        },
      },
    },
  },
};
