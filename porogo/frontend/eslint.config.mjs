import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: [
			'**/node_modules/*',
			'**/dist/*',
			'**/build/*',
			'**/revealjs/*',
			'**/webpack.config.{js,cjs}',
			'**/tsconfig.json',
			'*.config*',
			'**/__tests__',
			'**/main.js'
		]
	},

	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	),
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
			react,
		},

		settings: {
			react: {
				version: "detect",
			},
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
      		'brace-style': ['error'],
      		'eqeqeq': ['warn'],
      		'camelcase': 'error',
      		'comma-spacing': ['error', { 'before': false, 'after': true }],
			'no-undef': 'warn',
			indent: ['error', 4],
			quotes: ['error', 'single'],
			semi: ['error', 'always'],
			'no-unused-vars': ['warn'],
			'prefer-const': ['warn'],
			'@typescript-eslint/no-unused-vars': ['off']
		},
	}
];
