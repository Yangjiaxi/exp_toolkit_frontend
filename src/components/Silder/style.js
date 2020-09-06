import { createStyles, makeStyles } from "@material-ui/styles";

const drawerWidth = 250;

const useStyles = makeStyles(({ mixins, breakpoints }) =>
  createStyles({
    toolbar: mixins.toolbar,
    drawerPaper: {
      whiteSpace: "nowrap",
      width: drawerWidth,
      [breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    createButton: {
      fontWeight: "bold",
    },
  }),
);

export default useStyles;
