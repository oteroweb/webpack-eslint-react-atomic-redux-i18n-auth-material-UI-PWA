module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double"],
    //"indent": [0, "space"]
    "arrow-parens": ["error", "always"],
    //"arrow-body-style": [2, "as-needed"],
    "class-methods-use-this": 0,
    //"multiline-ternary": ["error", "never"],
    // "comma-dangle": [
    //   2,
    //   "always-multiline"
    // ],
    // "comma-dangle": [
    //   "error",
    //   {
    //     arrays: "never",
    //     objects: "never",
    //     imports: "never",
    //     exports: "never",
    //     functions: "never",
    //   },
    // ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    "jsx-a11y/heading-has-content": 0,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-confusing-arrow": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "prefer-template": 2,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-default-props": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "require-yield": 0,
    "no-unused-vars": 1,
  },
};
