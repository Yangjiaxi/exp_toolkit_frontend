import React, { memo } from "react";

import LinearProgress from "@material-ui/core/LinearProgress";

import useStyles from "./style";

const Progress = memo(() => {
  const classes = useStyles();
  return (
    <LinearProgress
      className={classes.progress}
      color="primary"
      classes={{
        colorPrimary: classes.color,
        barColorPrimary: classes.barColor,
      }}
    />
  );
});

export default Progress;
