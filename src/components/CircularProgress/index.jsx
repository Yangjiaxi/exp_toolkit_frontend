import React from "react";

import { CircularProgress, Typography, Paper } from "@material-ui/core";

import useStyles from "./style";

// const TextComp = TextTermMaker("CircularProgress");

const Progress = ({ text = "" }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <CircularProgress className={classes.progress} />
      <Typography align="center">{`正在加载 ${text}`}</Typography>
    </Paper>
  );
};

export default Progress;
