import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import security from 'eslint-plugin-security'
import pluginVue from 'eslint-plugin-vue'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/test-results/**', '*.config.*'],
  },

  {
    name: 'app/rules',
    rules: {
      'no-var': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'comma-dangle': ['error', 'only-multiline'],
      'id-length': [2, { exceptions: ['i', 'j', '_'] }],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
    },
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['tests/unit/**/*'],
  },

  skipFormatting,

  security.configs.recommended,
]
