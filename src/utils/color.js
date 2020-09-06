import * as colors from "@material-ui/core/colors";

export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const colorBook = [
  { name: "red", color: colors.red },
  { name: "pink", color: colors.pink },
  { name: "purple", color: colors.purple },
  { name: "deepPurple", color: colors.deepPurple },
  { name: "indigo", color: colors.indigo },
  { name: "blue", color: colors.blue },
  { name: "lightBlue", color: colors.lightBlue },
  { name: "cyan", color: colors.cyan },
  { name: "teal", color: colors.teal },
  { name: "green", color: colors.green },
  { name: "lightGreen", color: colors.lightGreen },
  { name: "lime", color: colors.lime },
  { name: "yellow", color: colors.yellow },
  { name: "amber", color: colors.amber },
  { name: "orange", color: colors.orange },
  { name: "deepOrange", color: colors.deepOrange },
  { name: "brown", color: colors.brown },
  { name: "grey", color: colors.grey },
  { name: "blueGrey", color: colors.blueGrey },
];

export const colorDict = colorBook.reduce(
  (prev, { name, color }) => ({ ...prev, [name]: color }),
  {},
);
