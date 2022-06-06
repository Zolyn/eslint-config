module.exports = {
    extends: ['alloy-patched', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:prettier/recommended'],
    rules: {
        'import/no-unresolved': 'error'
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            }
        }
    }
}