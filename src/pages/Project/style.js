import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      paddingBottom: spacing(30),
    },
  }),
);

export default useStyles;
