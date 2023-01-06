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
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
  ],
  "import/extensions": ["ignorePackages"],
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
      { extensions: [".js", ".jsx", ".txs"] },
    ],
  },
};
