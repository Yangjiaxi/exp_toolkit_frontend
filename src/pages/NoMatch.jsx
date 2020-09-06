import React, { memo } from "react";

import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(({ spacing }) =>
  createStyles({
    root: {
      padding: spacing(5),
    },
    value: {
      paddingLeft: spacing(2),
    },
    key: {
      marginTop: spacing(2),
    },
  }),
);

const NoMatch = memo(() => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.key}>
        页面找不到惹
      </Typography>
    </Paper>
  );
});

export default NoMatch;
