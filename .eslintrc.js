module.exports = {
    root: true,
    env: {
        browser: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    plugins: ['react'],
    extends: [
        'airbnb',
        'react-app',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ],
    rules: {
        'no-shadow': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-cycle': [2, { maxDepth: 1, ignoreExternal: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'import/prefer-default-export': ['warn'],
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
                allowBind: false,
                ignoreRefs: true,
            },
        ],
        'react/no-did-update-set-state': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'no-console': [
            'error',
            {
                allow: ['error'],
            },
        ],
        'no-debugger': 'error',
        camelcase: 'off',
        'class-methods-use-this': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/camelcase': ['off'],
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'ignore',
                custom: 'ignore',
                exceptions: [''],
            },
        ],
    },
};
