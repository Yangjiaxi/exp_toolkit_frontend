import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {},
    delete: { marginRight: spacing(1) },
    moreInfo: { padding: spacing(0) },
  }),
);

export default useStyles;
