import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {},
    table: { padding: spacing(10) },
    edit: {
      // paddingBottom: spacing(1),
      marginLeft: spacing(2),
      marginBottom: spacing(2),
    },
  }),
);

export default useStyles;
