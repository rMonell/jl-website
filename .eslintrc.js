module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    curly: "error",
    eqeqeq: ["error", "smart"],
    "no-var": "error",
    "no-else-return": "error",
    "no-useless-return": "error",
    indent: ["warn", 2],
    "no-multi-spaces": "warn",
    "no-trailing-spaces": "warn",
    "no-whitespace-before-property": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-newline": ["warn", { multiline: true }],
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": "warn",
    "space-before-blocks": "warn",
    "eol-last": ["warn", "never"],
    "space-before-function-paren": ["warn", "always"],
    "space-in-parens": ["warn", "never"],
    quotes: ["warn", "double"],
    semi: ["warn", "never"],
    "func-call-spacing": ["warn", "never"],
  },
}