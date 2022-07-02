const viewports = [
	{
		label: "small",
		width: 640,
		height: 480,
	},
	{
		label: "medium",
		width: 814,
		height: 768,
	},
	{
		label: "large",
		width: 1066,
		height: 814,
	},
];

const scenariosSimple = [
	{ label: "Index", url: "http://localhost:3000/" },
	{ label: "Grid", url: "http://localhost:3000/grid" },
	{ label: "Typography", url: "http://localhost:3000/typography" },
];

const scenariosTemplate = [
	{
		label: "LABEL",
		url: "http://localhost:3000",
	},
];

const scenarios = scenariosSimple.map((config) => {
	return {
		...scenariosTemplate,
		...config,
	};
});

const paths = {
	bitmaps_reference: "backstop/reference",
	bitmaps_test: "backstop/test_result",
	html_report: "backstop/report_html",
	ci_report: "backstop/report_ci",
};

const config = {
	id: "komplib",
	viewports,
	scenarios,
	paths,
	report: ["browser", "CI"],
	engine: "puppeteer",
	engineOptions: {
		args: ["--no-sandbox"],
	},
	asyncCaptureLimit: 5,
	asyncCompareLimit: 50,
	debug: false,
	debugWindow: false,
};

module.exports = config;
