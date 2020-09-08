import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing, palette }) =>
  createStyles({
    buttons: {
      margin: `${spacing(2)}px 0`,
    },
    chips: {
      marginLeft: spacing(1),
    },
    text: {
      padding: spacing(10),
      color: palette.grey[500],
    },
  }),
);

export default useStyles;
