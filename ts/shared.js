module.exports = {
    extends: ['plugin:import/recommended', 'plugin:import/typescript', 'plugin:prettier/recommended'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    rules: {
        'import/no-unresolved': 'error'
    }
}