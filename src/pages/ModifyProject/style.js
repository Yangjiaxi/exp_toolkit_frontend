import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      paddingBottom: spacing(30),
    },
    projectName: {
      marginBottom: spacing(3),
    },
    upload: {
      fontSize: "1.3em",
      // width: "5em",
      // height: "2.5em",
      float: "right",
      padding: spacing(1, 7),
    },
    appendix: {
      marginTop: spacing(3),
    },
    input: {
      fontSize: "1.5em",
    },
  }),
);

export default useStyles;
