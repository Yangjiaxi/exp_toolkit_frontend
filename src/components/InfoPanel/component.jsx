import React, { memo, Fragment } from "react";

import moment from "moment";

import { Typography, Paper } from "@material-ui/core";

import useStyles from "./style";

const InfoPanel = memo(({ info }) => {
  const classes = useStyles();

  const { _id, username, email, time } = info;

  const term = (key, value) => (
    <>
      <Typography variant="h5" className={classes.key}>
        {key}
      </Typography>
      <Typography className={classes.value}>{value}</Typography>
    </>
  );

  const list = [
    {
      key: "用户名",
      value: username,
    },

    {
      key: "电子邮件",
      value: email,
    },
    {
      key: "建立时间",
      value: moment(time).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      key: "用户ID",
      value: _id,
    },
  ];

  return (
    <Paper className={classes.root}>
      {list.map(({ key, value }, index) => (
        <Fragment key={index}>{term(key, value)}</Fragment>
      ))}
    </Paper>
  );
});

export default InfoPanel;
