import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, breakpoints, zIndex }) =>
  createStyles({
    root: {
      display: "flex",
      paddingBottom: spacing(20),
    },
    content: {
      marginTop: spacing(10),
      [breakpoints.down("xs")]: {
        marginTop: spacing(8),
      },
      flexGrow: 1,
    },
    fab: {
      position: "fixed",
      right: spacing(3),
      bottom: spacing(3),
      zIndex: zIndex.drawer - 1,
    },
  }),
);

export default useStyles;
