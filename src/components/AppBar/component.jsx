import React, { memo, useState } from "react";

import {
  Refresh as RefreshIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
} from "@material-ui/icons";

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import ThemeMenu from "../ThemeMenu";

import { PAGE_NAME_DICT_CN } from "../../pages/consts";

import useStyles from "./style";

const Bar = memo(({ pageName, logout, isMobile, toggleSlider }) => {
  const classes = useStyles();

  const [anchorLogout, setAnchorLogout] = useState(null);

  const handleClick = (callback) => ({ currentTarget }) => {
    callback(currentTarget);
  };

  const handleClose = (callback) => () => {
    callback(null);
  };

  const handleLogout = () => {
    setAnchorLogout(null);
    logout();
  };

  const refresh = () => {
    window.sessionStorage.clear();
    window.location.reload();
  };

  const pageNameCN = PAGE_NAME_DICT_CN[pageName] || pageName;

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters={isMobile}>
          {isMobile && (
            <IconButton color="inherit" onClick={() => toggleSlider()}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" noWrap>
            {pageNameCN}
          </Typography>
          <div className={classes.rightButtons}>
            <ThemeMenu />
            <IconButton color="inherit" onClick={refresh}>
              <RefreshIcon />
            </IconButton>
            <IconButton color="inherit" onClick={handleClick(setAnchorLogout)}>
              <PersonIcon />
            </IconButton>
          </div>
        </Toolbar>
        <Menu
          anchorEl={anchorLogout}
          open={Boolean(anchorLogout)}
          onClose={handleClose(setAnchorLogout)}
        >
          <MenuItem onClick={handleLogout}>登出</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
});

export default Bar;
