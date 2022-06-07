import tokens from "./tokens.json";

export default {
  title: "Tokens",
};

const Template = ({ name, group, ...args }) => {
  console.log(group);
  return `
    <div>${name}</div>
    <div>${group.value}</div>
    <div>${group.type}</div>
    `;
};

export const FontFamily = Template.bind({});
FontFamily.args = {
  name: "primary",
  group: tokens.font.family.primary,
};
