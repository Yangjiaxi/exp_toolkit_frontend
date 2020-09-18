import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    root: {},
    table: { padding: spacing(10) },
    select: {
      marginLeft: spacing(2),
    },
    plot: {
      marginBottom: spacing(2),
      padding: spacing(2),
    },
    plotButton: {
      marginRight: spacing(2),
    },
    text: {
      padding: spacing(2),
      fontWeight: "bold",
      color: palette.grey[600],
    },
    noText: {
      padding: spacing(10),
      color: palette.grey[500],
    },
  }),
);

export default useStyles;
