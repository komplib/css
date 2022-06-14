import "../_docs/index.styl";
import "./index.styl";

export default {
  title: "Grid",
};

const Template = ({ rows, ...args }) => {
  return `
    <div class="doc">
      ${rows
        .map((row, indexRow) => {
          return `
          <div class="row ${row.rowClasses}" style="${row.rowStyles}">
            ${Array(row.cols)
              .fill()
              .map((col, indexCol) => {
                return `
                <div class="${row.colClasses} ${
                  row.colClassesCustom &&
                  row.colClassesCustom(indexRow, indexCol)
                }">${row.text ? row.text : indexCol + 1}</div>
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
      return { cols: 1, colClasses: `col-${index + 1}`, text: `${index + 1}` };
    }),
};

export const ColumnWrap = Template.bind({});
ColumnWrap.args = {
  rows: [
    { cols: 2, rowClasses: "wrap-yes", colClasses: "col-7" },
    { cols: 2, rowClasses: "wrap-no", colClasses: "col-7" },
    { cols: 2, rowClasses: "wrap-reverse", colClasses: "col-7" },
  ],
};

export const ColumnOffset = Template.bind({});
ColumnOffset.args = {
  rows: Array(12)
    .fill()
    .map((_, index) => {
      return {
        cols: 1,
        colClasses: `col-1 offset-${index + 1}`,
        text: `${index + 1}`,
      };
    }),
};
export const RowDirection = Template.bind({});
RowDirection.args = {
  rows: [
    { cols: 2, rowClasses: "direction-row", colClasses: "col-2" },
    { cols: 2, rowClasses: "direction-rowReverse", colClasses: "col-2" },
    { cols: 2, rowClasses: "direction-column", colClasses: "col-2" },
    { cols: 2, rowClasses: "direction-columnReverse", colClasses: "col-2" },
  ],
};

export const ContentPosition = Template.bind({});
ContentPosition.args = {
  rows: [
    { cols: 2, rowClasses: "content-start", colClasses: "col-2" },
    { cols: 2, rowClasses: "content-end", colClasses: "col-2" },
    { cols: 2, rowClasses: "content-center", colClasses: "col-2" },
    { cols: 2, rowClasses: "content-spacebetween", colClasses: "col-2" },
    { cols: 2, rowClasses: "content-spacearound", colClasses: "col-2" },
    { cols: 2, rowClasses: "content-spaceevenly", colClasses: "col-2" },
  ],
};

export const AlignItems = Template.bind({});
AlignItems.args = {
  rows: [
    {
      cols: 3,
      rowClasses: "align-items-start",
      colClasses: "col-2",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-items-end",
      colClasses: "col-2",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-items-center",
      colClasses: "col-2",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-items-baseline",
      colClasses: "col-2",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-items-stretch",
      colClasses: "col-2",
      rowStyles: "height: 80px;",
    },
  ],
};

export const AlignContent = Template.bind({});
AlignContent.args = {
  rows: [
    {
      cols: 3,
      rowClasses: "align-content-start wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-content-end wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-content-center wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-content-spacebetween wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-content-spacearound wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
    {
      cols: 3,
      rowClasses: "align-content-stretch wrap-yes",
      colClasses: "col-7",
      rowStyles: "height: 80px;",
    },
  ],
};

export const OrderColumns = Template.bind({});
OrderColumns.args = {
  rows: Array(12)
    .fill("")
    .map(() => ({
      cols: 12,
      colClasses: "col-1",
      colClassesCustom: (indexRow, indexCol) => {
        return indexCol === 11 ? `order-${indexRow}` : "";
      },
    })),
};

export const GapColumn = Template.bind({});
GapColumn.args = {
  rows: Array(6)
    .fill("")
    .map((_, index) => ({
      cols: 6,
      rowClasses: `row gap-col-${index + 1}`,
    })),
};

export const GapRow = Template.bind({});
GapRow.args = {
  rows: Array(6)
    .fill("")
    .map((_, index) => ({
      cols: 2,
      rowClasses: `row wrap-yes gap-row-${index + 1}`,
    })),
};
