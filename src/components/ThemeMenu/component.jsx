import React, { memo, useState, useMemo } from "react";

import Checked from "@material-ui/icons/Check";
import Palette from "@material-ui/icons/Palette";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";

import { colorBook } from "../../utils/color";

const ThemeMenu = memo(
  ({ themeMode, changeThemeMode, changeThemeColor, themeColor }) => {
    const [anchorTheme, setAnchorTheme] = useState(null);

    const handleClick = (callback) => ({ currentTarget }) => {
      callback(currentTarget);
    };

    const handleClose = (callback) => () => {
      callback(null);
    };

    const handleChangeThemeMode = () => {
      setAnchorTheme(null);
      changeThemeMode();
    };

    const handleChangeColor = (colorName) => {
      setAnchorTheme(null);
      changeThemeColor(colorName);
    };

    const themeButton = (
      <IconButton color="inherit" onClick={handleClick(setAnchorTheme)}>
        <Palette />
      </IconButton>
    );

    const themeMenu = (
      <Menu
        anchorEl={anchorTheme}
        open={Boolean(anchorTheme)}
        onClose={handleClose(setAnchorTheme)}
        PaperProps={{ style: { maxHeight: 330 } }}
      >
        <MenuItem onClick={() => handleChangeThemeMode()}>
          <Typography>切换主题颜色</Typography>
        </MenuItem>
        <Divider />
        {useMemo(
          () =>
            colorBook.map(({ name, color: colorObj }, index) => (
              <MenuItem
                button
                key={index}
                onClick={() => handleChangeColor(name)}
              >
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: colorObj[500] }} />
                </ListItemAvatar>
                <ListItemText>
                  <Typography style={{ color: colorObj[500] }}>
                    {name.toUpperCase()}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  {themeColor === name && <Checked />}
                </ListItemSecondaryAction>
              </MenuItem>
            )),
          // eslint-disable-next-line
          [themeColor, themeMode],
        )}
      </Menu>
    );

    return (
      <>
        {themeButton}
        {themeMenu}
      </>
    );
  },
);

export default ThemeMenu;
