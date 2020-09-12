import React, { memo, useEffect } from "react";

import { Container, useMediaQuery, useTheme, Fab } from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";

import Progress from "../Progress";
import Slider from "../Silder";
import AppBar from "../AppBar";

import useStyles from "./style";

const Frame = memo(({ children, isLoading, toggleSlider, detectWidth }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    detectWidth(isMobile);
  }, [isMobile, detectWidth]);

  const MobileFab = () => (
    <>
      {isMobile && (
        <Fab
          className={classes.fab}
          color="primary"
          onClick={() => toggleSlider()}
        >
          <MenuIcon />
        </Fab>
      )}
    </>
  );

  // return loggedIn ? (
  //   <div className={classes.root}>
  //     <AppBar />
  //     <Slider />
  //     <MobileFab />
  //     <Container maxWidth="xl" className={classes.content}>
  //       {children}
  //     </Container>
  //     {isLoading && <Progress />}
  //   </div>
  // ) : (
  //     <Redirect to="/login" />
  //   );
  return (
    <div className={classes.root}>
      <AppBar />
      <Slider />
      <MobileFab />
      <Container maxWidth="xl" className={classes.content}>
        {children}
      </Container>
      {isLoading && <Progress />}
    </div>
  );
});

export default Frame;
