import React, { memo, useState, useMemo } from "react";

import {
  Check as Checked,
  Palette,
  ArrowRightAlt,
  Brightness5 as SunIcon,
  Brightness3 as MoonIcon,
  Palette as CircleIcon,
} from "@material-ui/icons";

import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
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

    const changeModeWord = () => {
      let fromIcon = <SunIcon />;
      let toIcon = <MoonIcon />;
      if (themeMode === "dark") [fromIcon, toIcon] = [toIcon, fromIcon];
      return (
        <>
          {fromIcon}
          <ArrowRightAlt style={{ margin: "0 1em" }} />
          {toIcon}
        </>
      );
    };

    const themeMenu = (
      <Menu
        anchorEl={anchorTheme}
        open={Boolean(anchorTheme)}
        onClose={handleClose(setAnchorTheme)}
        PaperProps={{ style: { maxHeight: 330 } }}
      >
        <MenuItem>
          <ListItemText>
            <Typography
              align="center"
              color="textPrimary"
              style={{ fontWeight: "bold" }}
            >
              主题与颜色
            </Typography>
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleChangeThemeMode()}
          style={{ justifyContent: "center" }}
        >
          {changeModeWord()}
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
                <ListItemIcon>
                  <CircleIcon style={{ color: colorObj[500] }} />
                </ListItemIcon>
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
