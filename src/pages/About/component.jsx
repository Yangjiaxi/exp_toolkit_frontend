import React, { memo, useEffect } from "react";

import { Typography, Paper, List, ListItem } from "@material-ui/core";
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
    content: {
      fontSize: "0.7em",
    },
    title: {
      fontSize: "1em",
    },
  }),
);

const About = memo(({ changeBrowserPath }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.ABOUT_PAGE);
  }, [changeBrowserPath]);
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" align="center">
        <List>
          <ListItem className={classes.title}>作者：</ListItem>
          <ListItem>
            <Typography className={classes.content}>杨家玺 沈嘉杰</Typography>
          </ListItem>
          <ListItem className={classes.title}>分工：</ListItem>
          <ListItem>
            <Typography className={classes.content}>
              杨家玺：后端, Python接口
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.content}>沈嘉杰：前端</Typography>
          </ListItem>
          <ListItem className={classes.title}>技术栈</ListItem>
          <ListItem>
            <Typography className={classes.content}>
              后端: Express.js MongoDB
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.content}>
              前端: React.js Redux Rxjs Material-UI
            </Typography>
          </ListItem>
        </List>
      </Typography>
    </Paper>
  );
});

export default About;
