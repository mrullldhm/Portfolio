import { next } from '@eslint-config-next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...next('core-web-vitals'),
  prettier
];