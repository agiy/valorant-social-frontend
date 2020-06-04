module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
    // ESLint: Parsing error: '}' expected. のエラーが解消できない
    // 'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint', 'vue'],
  // add your custom rules here
  rules: {}
}
