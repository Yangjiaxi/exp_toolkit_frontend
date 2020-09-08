import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    paper: {
      padding: `${spacing(5)}px 0`,
    },
    progress: {
      display: "block",
      margin: `${spacing(4)}px auto`,
    },
  }),
);

export default useStyles;
