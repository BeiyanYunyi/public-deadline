module.exports = {
  extends: [
    "airbnb-typescript-prettier",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
  ],
  parserOptions: { project: "./tsconfig.json" },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
};
