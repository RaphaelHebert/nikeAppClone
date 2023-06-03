module.exports = {
  env: {
    'jest/globals': true,
    es6: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': ['error'],
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 'latest',
  },
  ignorePatterns: [
    '!.*',
    'dist',
    'node_modules',
    '.eslintignore',
    '*.gradle',
    '*.plist',
    '*.json',
    '*.png',
    '*.mtl',
    '*.obj',
    '*.jpg',
    '*.svg',
  ],
};
