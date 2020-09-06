import pink from "@material-ui/core/colors/pink";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ zIndex }) =>
  createStyles({
    progress: {
      position: "fixed",
      zIndex: zIndex.modal + 1,
      top: 0,
      left: 0,
      width: "100%",
    },
    color: {
      backgroundColor: pink[500],
    },
    barColor: {
      backgroundColor: pink[100],
    },
  }),
);

export default useStyles;
