module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": ["describe", "it", "beforeEach", "cy"],
  "parser": "babel-eslint",
  "extends": [
    "standard",
    "standard-react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "babel",
    "react",
    "react"
  ],
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-before-function-paren": [0, "always"]
  }
};
