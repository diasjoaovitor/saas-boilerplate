import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...compat.config({
    extends: [
      'eslint:recommended',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:jest/recommended',
      'prettier'
    ],
    plugins: ['simple-import-sort'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error'
    },
    ignorePatterns: ['**/*.d.ts']
  })
]

export default eslintConfig
