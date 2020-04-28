module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'airbnb'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module' // Allows for the use of imports
    },
    rules: {
        'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
        '@typescript-eslint/explicit-function-return-type': 'off',
        "arrow-parens": [
            2,
            "as-needed"
            ],
            "function-paren-newline": [
            2,
            "consistent"
            ],
            "indent": [
            2,
            2
            ],
            "import/no-extraneous-dependencies": [
            2,
            {
                "devDependencies": true,
                "optionalDependencies": false,
                "peerDependencies": false
            }
            ],
            "import/extensions": [
            2,
            {
                "js": "never",
                "json": "always"
            }
            ],
            "jsx-a11y/anchor-is-valid": [
            2,
            {
                "components": [
                "Link"
                ],
                "specialLink": [
                "hrefLeft",
                "hrefRight",
                "to"
                ],
                "aspects": [
                "noHref",
                "invalidHref",
                "preferButton"
                ]
            }
            ],
            "jsx-quotes": [
            2,
            "prefer-single"
            ],
            "max-len": 0,
            "no-unused-vars": [
            2,
            {
                "varsIgnorePattern": "h"
            }
            ],
            "no-plusplus": [
            2,
            {
                "allowForLoopAfterthoughts": true
            }
            ],
            "no-multi-spaces": [
            2,
            {
                "ignoreEOLComments": true
            }
            ],
            "no-unused-expressions": [
            2,
            {
                "allowTernary": true
            }
            ],
            "object-curly-newline": [
            2,
            {
                "consistent": true
            }
            ],
            "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                ".js",
                ".jsx"
                ]
            }
            ],
            "react/no-unknown-property": [
            2,
            {
                "ignore": [
                "class"
                ]
            }
            ],
            "react/no-unused-state": 0,
            "react/prefer-stateless-function": [
            0
            ],
            "react/prop-types": [
            2,
            {
                "ignore": [
                "data"
                ],
                "customValidators": [],
                "skipUndeclared": false
            }
            ],
            "react/react-in-jsx-scope": [
            0
            ],
            "spaced-comment": 0
    },
    overrides: [
        // Override some typescript rules just for .js files
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off' 
            }
        }
    ]

}