import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    chips: {
      marginLeft: spacing(1),
    },
  }),
);

export default useStyles;
