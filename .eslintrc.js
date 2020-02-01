module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': "off",
    'no-irregular-whitespace': "off",
    'no-case-declarations': "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
