const path = require("path");

module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-docs",
		"storybook/addon-viewport",
		"storybook-addon-pseudo-states",
	],
	features: {
		postcss: false,
	},
	framework: "@storybook/html",
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.styl$/,
			loaders: ["style-loader", "css-loader?url=false", "stylus-loader"],
			include: path.resolve(__dirname, "../"),
		});

		// Return the altered config
		return config;
	},
};
