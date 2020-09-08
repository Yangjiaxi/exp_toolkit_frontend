import React, { memo, useEffect } from "react";

import { Container, Button } from "@material-ui/core";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const Project = memo(
  ({ changeBrowserPath, projectID, checkoutContent, isLoading }) => {
    const classes = useStyles();
    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.PROJECT_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      checkoutContent(projectID);
    }, [projectID, checkoutContent]);

    if (isLoading) {
      return <Loading />;
    }

    return (
      <Container maxWidth="xl" className={classes.root}>
        <Button>111</Button>
      </Container>
    );
  },
);

export default Project;
