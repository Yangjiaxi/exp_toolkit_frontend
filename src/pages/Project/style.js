import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      paddingBottom: spacing(30),
    },
    paper: {
      marginTop: spacing(2),
      padding: spacing(3),
      whiteSpace: "pre-wrap",
    },
    appendix: {
      marginTop: spacing(3),
    },
    input: {
      lineHeight: "1.5em",
      fontSize: "1.3em",
    },
  }),
);

export default useStyles;
