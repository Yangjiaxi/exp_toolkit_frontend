import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {},
    table: { padding: spacing(10) },
  }),
);

export default useStyles;
