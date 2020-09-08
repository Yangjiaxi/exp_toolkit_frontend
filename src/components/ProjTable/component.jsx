import React, { memo, Fragment } from "react";

import { List, Paper, Typography } from "@material-ui/core";

import DocRow from "../ProjRow";
import DeleteRow from "../DeleteRow";

// import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

// const TextComp = TextTermMaker("DocsTable");

const DocsTable = memo(({ data, isTrash }) => {
  const classes = useStyles();
  const dataFix = data || [];
  const dataLength = dataFix.length;

  let render = (
    <>
      <Typography variant="h4" className={classes.text} align="center">
        {/* <TextComp term={i18nHelper.listNoData} /> */}
      </Typography>
    </>
  );

  const makeEach = (ele, index) => {
    if (isTrash) {
      return (
        <DeleteRow rowData={ele} disableDivider={dataLength - 1 === index} />
      );
    }
    return (
      <DocRow
        rowData={ele}
        isTrash={isTrash || false}
        disableDivider={dataLength - 1 === index}
      />
    );
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

export default DocsTable;
