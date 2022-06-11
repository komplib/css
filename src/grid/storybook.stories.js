import "../_docs/index.styl";
import "./index.styl";

export default {
  title: "Grid",
};

const Template = ({ rows, ...args }) => {
  return `
    <div class="doc">
      ${rows
        .map((row, index) => {
          return `
          <div class="row">
            ${Array(row.cols)
              .fill()
              .map((_, index) => {
                return `
                <div>${index + 1}</div>
                `;
              })
              .join("")}
          </div>`;
        })
        .join("")}
    </div>
  `;
};

export const FluidColumns = Template.bind({});
FluidColumns.args = {
  rows: Array(14)
    .fill()
    .map((_, index) => {
      return { cols: index + 1 };
    }),
};
