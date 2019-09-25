module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
		jquery: true,
		mocha: true
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  plugins: ['prettier', 'react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
		react: {
		  version: 'detect'
		}
	},
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
