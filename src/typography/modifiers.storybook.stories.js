import "./index.styl";

export default {
  title: "Typography/Modifiers",
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

export const FontFamily = Template.bind({});
FontFamily.args = {
  classes: ["fontFamilyDefault", "fontFamilyPrimary", "fontFamilyMonospaced"],
};

export const size = Template.bind({});
size.args = {
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

export const weight = Template.bind({});
weight.args = {
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

export const FontStyle = Template.bind({});
FontStyle.storyName = "Italic";
FontStyle.args = {
  classes: ["fontStyleNormal", "fontStyleItalic"],
};

export const TextTransform = Template.bind({});
TextTransform.storyName = "Case";
TextTransform.args = {
  classes: [
    "fontTransformUppercase",
    "fontTransformLowercase",
    "fontTransformCapitalize",
    "fontTransformNone",
  ],
};
