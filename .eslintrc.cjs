module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    "import/extensions": [".js", ".jsx", "ts", "tsx"],
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [
      0,
      { extensions: [".js", ".jsx", ".ts", ".txs"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-absolute-path": 0,
    "import/no-unresolved": 0,
    "react/jsx-props-no-spreading": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    indent: 0,
    "comma-dangle": 0,
    "no-useless-escape": 0,
    "object-curly-newline": 0,
  },
};
