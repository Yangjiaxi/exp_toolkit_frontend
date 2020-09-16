import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {},
    table: { padding: spacing(10) },
    select: {
      marginLeft: spacing(2),
    },
    plot: {
      marginTop: spacing(2),
      padding: spacing(2),
    },
    plotButton: {
      marginRight: spacing(2),
    },
  }),
);

export default useStyles;
