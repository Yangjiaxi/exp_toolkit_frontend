import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      paddingBottom: spacing(30),
    },
    paper: {
      marginBottom: spacing(2),
      padding: spacing(3),
      whiteSpace: "pre-wrap",
    },
    appendix: {
      marginTop: spacing(3),
    },
    back: {
      marginBottom: "1em",
    },
  }),
);

export default useStyles;
