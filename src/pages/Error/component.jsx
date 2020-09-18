import React, { memo, useEffect } from "react";

import { Typography, Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { PAGE_NAME_DICT } from "../consts";

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

const Error = memo(({ changeBrowserPath }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.ERROR_PAGE);
  }, [changeBrowserPath]);
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.key}>
        页面找不到惹
      </Typography>
    </Paper>
  );
});

export default Error;
