import "./index.styl";

export default {
  title: "Typography",
};

const Template = ({ name, group, ...args }) => {
  return `
    <ul>
      <li class="fontFamilyDefault">fontFamilyDefault lorem ipsum dolor sit amet </li>
      <li class="fontFamilyPrimary">fontFamilyPrimary lorem ipsum dolor sit amet</li>
      <li class="fontFamilyMonospaced">fontFamilyMonospaced lorem ipsum dolor sit amet</li>
    </ul>`;
};

export const FontFamily = Template.bind({});
FontFamily.args = {};
