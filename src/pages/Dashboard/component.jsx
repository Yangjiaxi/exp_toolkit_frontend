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

const Dashboard = memo(({ changeBrowserPath }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.DASHBOARD_PAGE);
  }, [changeBrowserPath]);
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" align="center">
        这是主页
      </Typography>
    </Paper>
  );
});

export default Dashboard;
