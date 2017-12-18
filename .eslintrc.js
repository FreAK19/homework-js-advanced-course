module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    rules: {
        'no-var': 'error',
        'no-unused-vars': 'no-error',
        'prefer-const': ['error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: true,
        }],
        'one-var': 'error'
    }
};