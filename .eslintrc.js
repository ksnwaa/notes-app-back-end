import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config} */
const config = {
  ...daStyle, // Spread daStyle configuration directly
  files: ['**/*.js'],
  languageOptions: {
    sourceType: 'commonjs',
    globals: globals.browser, // Add globals configuration here
  },
  extends: [pluginJs.configs.recommended], // Use `extends` to include recommended config
};

export default config;
