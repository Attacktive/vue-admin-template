module.exports = {
	root: true,
	parserOptions: {
		parser: "@babel/eslint-parser",
		sourceType: "module"
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ["plugin:vue/recommended", "eslint:recommended"],

	// add your custom rules here
	// it is base on https://github.com/vuejs/eslint-config-vue
	rules: {
		"accessor-pairs": "warn",
		"array-bracket-spacing": [
			"warn",
			"never"
		],
		"arrow-spacing": [
			"warn",
			{
				"before": true,
				"after": true
			}
		],
		"block-spacing": [
			"warn",
			"always"
		],
		"brace-style": [
			"warn",
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"camelcase": [
			"warn",
			{
				"properties": "always"
			}
		],
		"comma-dangle": [
			"off",
			"never"
		],
		"comma-spacing": [
			"warn",
			{
				"before": false,
				"after": true
			}
		],
		"comma-style": [
			"warn",
			"last"
		],
		"constructor-super": "error",
		"curly": [
			"error",
			"multi-line"
		],
		"dot-location": [
			"warn",
			"property"
		],
		"eol-last": "warn",
		"eqeqeq": [
			"warn",
			"always",
			{
				"null": "ignore"
			}
		],
		"generator-star-spacing": [
			"warn",
			{
				"before": true,
				"after": true
			}
		],
		"handle-callback-err": [
			"warn",
			"^(err|error)$"
		],
		"indent": [
			"warn",
			"tab"
		],
		"jsx-quotes": [
			"warn",
			"prefer-double"
		],
		"key-spacing": [
			"warn",
			{
				"beforeColon": false,
				"afterColon": true
			}
		],
		"keyword-spacing": [
			"warn",
			{
				"before": true,
				"after": true
			}
		],
		"new-cap": [
			"error",
			{
				"newIsCap": true,
				"capIsNew": false
			}
		],
		"new-parens": "error",
		"no-array-constructor": "warn",
		"no-caller": "error",
		"no-class-assign": "warn",
		"no-cond-assign": "error",
		"no-console": "off",
		"no-const-assign": "error",
		"no-control-regex": "off",
		"no-debugger": process.env.NODE_ENV === "production"? "error": "off",
		"no-delete-var": "warn",
		"no-dupe-args": "warn",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-eval": "error",
		"no-ex-assign": "error",
		"no-extend-native": "warn",
		"no-extra-bind": "warn",
		"no-extra-boolean-cast": "warn",
		"no-extra-parens": [
			"warn",
			"functions"
		],
		"no-fallthrough": "warn",
		"no-floating-decimal": "error",
		"no-func-assign": "error",
		"no-implied-eval": "error",
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": [
			"error",
			{
				"allowLoop": false,
				"allowSwitch": false
			}
		],
		"no-lone-blocks": "warn",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "warn",
		"no-multi-str": "warn",
		"no-multiple-empty-lines": [
			"warn",
			{
				"max": 2
			}
		],
		"no-native-reassign": "error",
		"no-new-object": "warn",
		"no-new-require": "warn",
		"no-new-symbol": "warn",
		"no-new-wrappers": "warn",
		"no-obj-calls": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-path-concat": "warn",
		"no-proto": "warn",
		"no-redeclare": "warn",
		"no-regex-spaces": "warn",
		"no-return-assign": [
			"warn",
			"except-parens"
		],
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-spaced-func": "warn",
		"no-this-before-super": "error",
		"no-throw-literal": "warn",
		"no-trailing-spaces": "warn",
		"no-undef": "warn",
		"no-undef-init": "warn",
		"no-unmodified-loop-condition": "warn",
		"no-unneeded-ternary": [
			"warn",
			{
				"defaultAssignment": false
			}
		],
		"no-unreachable": "warn",
		"no-unsafe-finally": "warn",
		"no-unsafe-negation": "error",
		"no-unused-vars": [
			"warn",
			{
				"vars": "all",
				"args": "none"
			}
		],
		"no-useless-call": "warn",
		"no-useless-computed-key": "warn",
		"no-useless-constructor": "warn",
		"no-useless-escape": "warn",
		"no-whitespace-before-property": "warn",
		"no-with": "warn",
		"object-curly-spacing": [
			"warn",
			"always",
			{
				"objectsInObjects": false
			}
		],
		"one-var": [
			"warn",
			{
				"initialized": "never"
			}
		],
		"operator-linebreak": [
			"warn",
			"after",
			{
				"overrides": {
					"?": "before",
					":": "before"
				}
			}
		],
		"padded-blocks": [
			"warn",
			"never"
		],
		"prefer-const": "warn",
		"quotes": [
			"warn",
			"double",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"semi": [
			"warn",
			"always"
		],
		"semi-spacing": [
			"warn",
			{
				"before": false,
				"after": true
			}
		],
		"space-before-blocks": [
			"warn",
			"always"
		],
		"space-before-function-paren": [
			"warn",
			"never"
		],
		"space-in-parens": [
			"warn",
			"never"
		],
		"space-unary-ops": [
			"warn",
			{
				"words": true,
				"nonwords": false
			}
		],
		"spaced-comment": [
			"warn",
			"always",
			{
				"markers": [
					"global",
					"globals",
					"eslint",
					"eslint-disable",
					"*package",
					"!",
					","
				]
			}
		],
		"template-curly-spacing": [
			"warn",
			"never"
		],
		"use-isnan": "error",
		"valid-typeof": "error",
		"wrap-iife": [
			"warn",
			"any"
		],
		"yield-star-spacing": [
			"warn",
			"both"
		],
		"yoda": [
			"warn",
			"never"
		],

		"vue/html-closing-bracket-spacing": [
			"warn",
			{
				"startTag": "never",
				"endTag": "never",
				"selfClosingTag": "never"
			}
		],
		"vue/html-indent": [
			"warn",
			"tab"
		],
		"vue/max-attributes-per-line": [
			"warn",
			{
				"singleline": 10,
				"multiline": {
					"max": 1
				}
			}
		],
		"vue/multi-word-component-names": "off",
		"vue/multiline-html-element-content-newline": "off",
		"vue/name-property-casing": [
			"error",
			"PascalCase"
		],
		"vue/no-v-html": "off",
		"vue/singleline-html-element-content-newline": "off"
	}
};
