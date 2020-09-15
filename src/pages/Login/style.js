import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: spacing(3),
    },
    avatar: {
      margin: spacing(1),
      backgroundColor: palette.secondary.main,
    },
  }),
);

export default useStyles;
