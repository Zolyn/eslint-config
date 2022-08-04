module.exports = {
    extends: ['alloy', 'alloy/typescript', 'alloy/vue', './shared.js'],
    parserOptions: {
        parser: {
            // JS
            js: '@babel/eslint-parser',
            jsx: '@babel/eslint-parser',
            // TS
            ts: '@typescript-eslint/parser',
            tsx: '@typescript-eslint/parser',
        },
    },
    rules: {
        '@typescript-eslint/prefer-optional-chain': 'off',
    },
};
