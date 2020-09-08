import React, { memo } from "react";

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Typography,
} from "@material-ui/core";

import { Info, Create } from "@material-ui/icons";

import Anchor from "../Anchor";
import { PAGE_NAME_DICT, PAGE_NAME_DICT_CN } from "../../pages/consts";
import useStyles from "./style";

const itemList = [
  { type: "divider" },
  {
    type: "link",
    to: "/",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.EXPLIST_PAGE],
    name: PAGE_NAME_DICT.EXPLIST_PAGE,
    icon: <Info />,
  },
  {
    type: "link",
    to: "/about",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.ABOUT_PAGE],
    name: PAGE_NAME_DICT.ABOUT_PAGE,
    icon: <Info />,
  },
  { type: "divider" },
];

const Slider = memo(({ open, toggleSlider, pageName, isMobile }) => {
  const classes = useStyles();

  const handleClick = () => {
    if (isMobile) toggleSlider();
  };

  const makeDrawerStyle = () => {
    const boot = { anchor: "left", variant: "permanent" };
    if (isMobile) {
      boot.variant = "temporary";
      boot.anchor = "bottom";
    }
    return boot;
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      {...makeDrawerStyle()}
      open={open}
      onClose={() => toggleSlider()}
    >
      <List>
        {!isMobile && <div className={classes.toolbar} />}
        <Divider />
        <ListItem>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="large"
            onClick={() => {}}
          >
            <Create />
            <Typography className={classes.createButton} />
            Test
          </Button>
        </ListItem>

        {itemList.map(({ type, ...rest }, index) => {
          if (type === "divider") return <Divider key={index} />;
          const { text, icon, name, to } = rest;
          return (
            <Anchor to={to} key={index} component="div">
              <ListItem
                button
                selected={pageName === name}
                onClick={handleClick}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItem>
            </Anchor>
          );
        })}
      </List>
    </Drawer>
  );
});

export default Slider;
