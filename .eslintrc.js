module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": ['./tsconfig.json'],
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "react/jsx-indent-props": [2, 2],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": 0,
        "import/extensions": "off",
        "import/extraneous-dependencies": "off",
        "max-len": ['error', { "ignoreComments": true }],
        "react/display-name": "off",
    },
    ignorePatterns: ['.eslintrc.js']
}
