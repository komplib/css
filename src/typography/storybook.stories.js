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

export const FontFamily = Template.bind({});
FontFamily.args = {
  classes: ["fontFamilyDefault", "fontFamilyPrimary", "fontFamilyMonospaced"],
};

export const FontSize = Template.bind({});
FontSize.args = {
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

export const FontWeight = Template.bind({});
FontWeight.args = {
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
FontStyle.args = {
  classes: ["fontStyleNormal", "fontStyleItalic"],
};

export const TextTransform = Template.bind({});
TextTransform.args = {
  classes: [
    "fontTransformUppercase",
    "fontTransformLowercase",
    "fontTransformCapitalize",
    "fontTransformNone",
  ],
};
