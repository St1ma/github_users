module.exports = {
  "env": {
    "es6": true,
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "globals": {
    "__DEV__": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": ['off'],
  }
};
