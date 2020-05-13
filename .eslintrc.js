module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'airbnb',
        'prettier'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
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
        "prettier/prettier": ["error"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
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