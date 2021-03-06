module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    JSX: true,
  },
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'eslint-config-next',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-underscore-dangle': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],

    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/function-component-definition': 0,
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-unused-vars': 0,
        'vars-on-top': 0,
        'no-var': 0,
      },
    },
  ],
};
