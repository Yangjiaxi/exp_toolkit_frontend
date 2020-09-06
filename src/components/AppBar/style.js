import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ zIndex, spacing, breakpoints }) =>
  createStyles({
    appBar: {
      zIndex: zIndex.drawer + 1,
    },
    rightButtons: {
      marginLeft: "auto",
      display: "flex",
      "& button": {
        [breakpoints.down("xs")]: {
          padding: spacing(1),
        },
      },
    },
  }),
);

export default useStyles;
