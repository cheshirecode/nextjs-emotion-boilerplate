const moduleResolverConfig = require('./moduleResolverConfig');
const eslintConfig = {
  globals: {
    __VERSION__: true,
    process: true,
    fetch: true,
    __filename: true,
    __dirname: true,
    require: true,
    navigator: true
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@babel', 'import', '@emotion', 'react', 'prettier', 'json'],
  settings: {
    react: {
      version: '^17'
    },
    'import/resolver': {
      'babel-module': {
        ...moduleResolverConfig
      }
    }
  },
  rules: {
    'react/prop-types': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: ['react-?', '.svg?'],
        caseSensitive: false
      }
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
module.exports = eslintConfig;
