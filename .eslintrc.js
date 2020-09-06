module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all"
      }
    ],
    quotes: ["error", "double"],
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-bitwise": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-restricted-syntax": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/no-did-update-set-state": 0,
    "react/prop-types": 0,
    "jsx-a11y/accessible-emoji": 0,
    "no-case-declarations": 0,
    "import/no-cycle": 0,
    "max-len": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default-member": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-named-as-default": 0,
  },
};
