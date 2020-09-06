import React, { memo } from "react";

import Helmet from "react-helmet";

// import MenuIcon from "@material-ui/icons/Menu";
import RefreshIcon from "@material-ui/icons/Refresh";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import ThemeMenu from "../ThemeMenu";

import { colorDict } from "../../utils/color";

import useStyles from "./style";

const Bar = memo(({ themeColor, pageName /* isMobile, toggleSlider */ }) => {
  const classes = useStyles();

  const refresh = () => {
    window.sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <meta
          name="theme-color"
          content={colorDict[themeColor][500]}
          data-react-helmet="true"
        />
        <title>{pageName}</title>
      </Helmet>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* {!isMobile && (
              <IconButton color="inherit" onClick={() => toggleSlider()}>
                <MenuIcon />
              </IconButton>
            )} */}
          <Typography variant="h6" color="inherit" noWrap>
            {pageName}
          </Typography>
          <div className={classes.rightButtons}>
            <ThemeMenu />
            <IconButton color="inherit" onClick={refresh}>
              <RefreshIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default Bar;
