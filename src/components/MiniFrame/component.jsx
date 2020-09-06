import React, { memo, useEffect } from "react";

import {
  Container,
  useMediaQuery,
  useTheme,
  Grid,
  Paper,
} from "@material-ui/core";

import Progress from "../Progress";
import ThemeMenu from "../ThemeMenu";

import useStyles from "./style";

const MiniFrame = memo(({ children, isLoading, detectWidth }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    detectWidth(isMobile);
  }, [isMobile, detectWidth]);

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth="xs">
          <Paper className={classes.paper}>{children}</Paper>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <ThemeMenu />
          </Grid>
        </Container>
        {isLoading && <Progress />}
      </div>
    </>
  );
});

export default MiniFrame;
