module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true,
      node: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
    },
    plugins: [
      'react',
    ],
    rules: {
      jsx-quotes: 0,
    },
  };