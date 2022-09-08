module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': 'off',
    'dot-notation': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
    'no-fallthrough': 'off',
  },
};
