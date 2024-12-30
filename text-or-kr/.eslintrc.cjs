module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },

    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
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
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeautres": {
            jsx: true
        }
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "ignorePatterns": [
        // "**/dist/assets/*.js"
    ],
    "rules": {
        // "react/prop-types": "off",
        // "no-unused-vars": "off",
        // "@typescript-eslint/no-unused-vars": "off"
    },
    "settings":
    {
        react: { version: 'detect' }
    }
}
