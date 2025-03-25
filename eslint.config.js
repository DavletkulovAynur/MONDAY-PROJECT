import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

//ПОСМОТРЕТЬ на ошибки
export default tseslint.config({
  ignores: ['dist'],

  extends: [
    ...tseslint.configs.recommended, // Убираем spread оператор, используем просто объекты
    eslintConfigPrettier, //отключаем, prettier главный
  ],
  plugins: {
    react, // Добавляем React как плагин
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier, // Добавляем Prettier как плагин
  },
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser, // Определяем глобальные переменные для браузера
  },
  rules: {
    ...react.configs.recommended.rules, // Используем правила из плагина React
    ...reactHooks.configs.recommended.rules, // Используем правила из плагина React Hooks
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Специфичное правило для React Refresh
    'prettier/prettier': 'error', // Применяем правило для Prettier, чтобы ESLint фиксировал ошибки форматирования
    'react/react-in-jsx-scope': 'off',
  },
})
