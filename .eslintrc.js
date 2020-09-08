module.exports = {
    extends: [
      'airbnb',
      'airbnb/hooks',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      'react/jsx-filename-extension': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'linebreak-style': 'off',
      'global-require': 'off',
      'react/prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'no-bitwise': 'off',
      'no-unused-expressions': 'off'
    },
  };