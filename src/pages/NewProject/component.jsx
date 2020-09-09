import React, { memo, useEffect } from "react";

import { Container } from "@material-ui/core";
import Loading from "../../components/CircularProgress";
import SchemaTable from "../../components/SchemaTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const NewProject = memo(({ changeBrowserPath, isLoading }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.NEWPROJECT_PAGE);
  }, [changeBrowserPath]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      <SchemaTable />
    </Container>
  );
});

export default NewProject;
