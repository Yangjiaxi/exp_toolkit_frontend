import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      border: "1px solid red",
    },
    container: {
      margin: `${spacing(10)}px auto`,
    },
    paper: {
      padding: spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
);

export default useStyles;
