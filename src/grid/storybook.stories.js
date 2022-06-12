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
              .map((col, index) => {
                return `
                <div class="${row.classes}">${
                  row.text ? row.text : index + 1
                }</div>
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

export const FixedColumns = Template.bind({});
FixedColumns.args = {
  rows: Array(12)
    .fill()
    .map((_, index) => {
      return { cols: 1, classes: `col-${index + 1}`, text: `${index + 1}` };
    }),
};
