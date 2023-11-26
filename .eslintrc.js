module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
    'next/core-web-vitals',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/first': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        }
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      settings: {
        'import/resolver': 'typescript'
      },
      extends: ['plugin:import/typescript']
    }
  ]
};
