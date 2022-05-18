module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended',
    'next/core-web-vitals',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    {
      files: ['pages/**/*'],
      rules: {
        'import/no-default-export': 'off',
        'unicorn/filename-case': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'chakra-ui', 'sort-keys-fix'],
  rules: {
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': 'off',
    'chakra-ui/require-specific-component': 'error',
    'import/no-default-export': 'error',
    'import/order': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'react/boolean-prop-naming': 'error',
    'react/destructuring-assignment': ['error', 'never'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { children: 'never', propElementValues: 'always', props: 'never' },
    ],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-array-index-key': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prefer-stateless-function': 'error',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-null': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/prefer-at': [
      'error',
      {
        checkAllIndexAccess: true,
      },
    ],
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
