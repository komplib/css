import "../_docs/index.styl";
import "./index.styl";

export default {
	title: "Typography",
};

const Template = ({ name, classes, ...args }) => {
	return `
		<ul>
			${classes
				.map((item) => {
					return `
						<li class="${item}">
						<code>${item}</code>
						lorem ipsum dolor sit amet </li>
					`;
				})
				.join("")}
		</ul>`;
};

export const Heading = Template.bind({});
Heading.args = {
	classes: [
		"heading00",
		"heading0",
		"heading1",
		"heading2",
		"heading3",
		"heading4",
		"heading5",
		"heading6",
	],
};
