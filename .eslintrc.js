const path = require("path");

module.exports = {
  plugins: ["jest"],
  extends: ["airbnb", "plugin:jest/recommended"],
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  rules: {
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": 1,
    "no-unused-expressions": ["error", { allowTernary: true }],
    "jsx-a11y/label-has-for": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "react/jsx-filename-extension": 1,
    "react/react-in-jsx-scope": 1,
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "arrow-parens": 0,
    "no-nested-ternary": 0,
  },
  globals: {'shallow': 1, 'mount':1, 'render':1},
};
