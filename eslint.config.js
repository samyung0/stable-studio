import eslintPluginAstro from "eslint-plugin-astro";
export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],
	{
		rules: {
			"no-noninteractive-element-to-interactive-role": [
				"error",
				{
					ul: [
						"listbox",
						"menu",
						"menubar",
						"radiogroup",
						"tablist",
						"tree",
						"treegrid",
					],
					ol: [
						"listbox",
						"menu",
						"menubar",
						"radiogroup",
						"tablist",
						"tree",
						"treegrid",
					],
					li: ["menuitem", "option", "row", "tab", "treeitem"],
					table: ["grid"],
					td: ["gridcell"],
				},
			],
		},
	},
];
