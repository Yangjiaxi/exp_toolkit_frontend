import React from "react";

import { CircularProgress, Typography, Paper } from "@material-ui/core";
// import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

// const TextComp = TextTermMaker("CircularProgress");

const Progress = ({ text }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <CircularProgress className={classes.progress} />
      <Typography align="center">
        {/* <TextComp term={i18nHelper.loadingPrefix} /> */}
        {text}
      </Typography>
    </Paper>
  );
};

export default Progress;
