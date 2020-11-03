module.exports = {
  parser: `@typescript-eslint/parser`, // Specifies the ESLint parser
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    `plugin:@typescript-eslint/recommended`,
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin
    // that would conflict with prettier
    `prettier/@typescript-eslint`,
    // Enables eslint-plugin-prettier and displays prettier errors as ESLint
    `plugin:prettier/recommended`,
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
  },
  ignorePatterns: [`coverage`, `steps_file.js`, `**/node_modules/**`],
  plugins: [],
  rules: {
    // 2 = error
    // 1 = warning
    // 0 = ignore
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-function-return-type": 2,
    "@typescript-eslint/member-ordering": 2,
    "comma-dangle": [
      `error`,
      {
        arrays: `always-multiline`,
        objects: `always-multiline`,
        imports: `always-multiline`,
        exports: `always-multiline`,
        functions: `always-multiline`,
      },
    ],
    "no-var": `error`,
    semi: [`error`, `always`],
    quotes: [`error`, `backtick`],
    "prettier/prettier": `error`,
    "max-len": [
      `error`,
      {
        code: 120,
      },
    ],
  },
};
