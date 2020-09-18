import React, { memo, Fragment } from "react";

import { List, Paper, Typography } from "@material-ui/core";

import ProjectRow from "../ProjRow";
import TrashRow from "../TrashRow";

import useStyles from "./style";

const ProjectsTable = memo(({ data, isTrash = false }) => {
  const classes = useStyles();
  const dataFix = data || [];
  const dataLength = dataFix.length;

  let render = (
    <>
      <Typography variant="h4" className={classes.text} align="center">
        没有数据
      </Typography>
    </>
  );

  const makeEach = (ele, index) => {
    if (!isTrash) {
      return (
        <ProjectRow rowData={ele} disableDivider={dataLength - 1 === index} />
      );
    }
    return <TrashRow rowData={ele} disableDivider={dataLength - 1 === index} />;
  };

  if (dataFix.length > 0) {
    render = (
      <List>
        {dataFix.map((ele, index) => (
          <Fragment key={index}>{makeEach(ele, index)}</Fragment>
        ))}
      </List>
    );
  }

  return (
    <>
      <Paper className={classes.paper}>{render}</Paper>
    </>
  );
});

export default ProjectsTable;
