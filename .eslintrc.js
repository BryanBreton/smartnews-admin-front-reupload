module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "prefer-const": 2,
    "no-var": 2,
    "endOfLine":"auto"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
