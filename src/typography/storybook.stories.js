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
    "fontSizeLarge4",
    "fontSizeLarge3",
    "fontSizeLarge2",
    "fontSizeLarge1",
    "fontSizeLarge",
    "fontSizeDefault",
    "fontSizeSmall",
    "fontSizeSmall1",
    "fontSizeSmall2",
  ],
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  classes: [
    "fontWeightBlack",
    "fontWeightExtraBold",
    "fontWeightBold",
    "fontWeightSemiBold",
    "fontWeightMedium",
    "fontWeightRegular",
    "fontWeightLight",
    "fontWeightExtraLight",
    "fontWeightThin",
    "fontWeightBolder",
    "fontWeightLighter",
  ],
};

export const List = Template.bind({});
List.args = {
  classes: ["fontStyleNormal", "fontStyleItalic"],
};

export const Code = Template.bind({});
Code.args = {
  classes: ["fontFamilyDefault", "fontFamilyPrimary", "fontFamilyMonospaced"],
};
