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

import {
  Info,
  Create,
  ContactPhone,
  DeleteOutline,
  ListAltTwoTone,
} from "@material-ui/icons";

import Anchor from "../Anchor";
import { PAGE_NAME_DICT, PAGE_NAME_DICT_CN } from "../../pages/consts";
import useStyles from "./style";

const createItem = {
  type: "link",
  to: "/create",
  text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.NEWPROJECT_PAGE],
  name: PAGE_NAME_DICT.NEWPROJECT_PAGE,
};

const itemList = [
  { type: "divider" },
  {
    type: "link",
    to: "/",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.EXPLIST_PAGE],
    name: PAGE_NAME_DICT.EXPLIST_PAGE,
    icon: <ListAltTwoTone />,
  },
  {
    type: "link",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.TRASH_PAGE],
    icon: <DeleteOutline />,
    name: PAGE_NAME_DICT.TRASH_PAGE,
    to: "/trash",
  },
  { type: "divider" },
  {
    type: "link",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.PROFILE_PAGE],
    icon: <ContactPhone />,
    name: PAGE_NAME_DICT.PROFILE_PAGE,
    to: "/profile",
  },
  {
    type: "link",
    to: "/about",
    text: PAGE_NAME_DICT_CN[PAGE_NAME_DICT.ABOUT_PAGE],
    name: PAGE_NAME_DICT.ABOUT_PAGE,
    icon: <Info />,
  },
];

const Slider = memo(({ open, toggleSlider, pageName, isMobile }) => {
  const classes = useStyles();

  const handleClick = () => {
    if (isMobile) toggleSlider();
  };

  const handleCreate = () => {
    toggleSlider();
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
        <Anchor to={createItem.to}>
          <ListItem>
            <Button
              variant={pageName === createItem.name ? "outlined" : "contained"}
              // variant="outlined"
              color="primary"
              fullWidth
              size="large"
              onClick={handleCreate}
            >
              <Create />
              <Typography className={classes.createButton}>
                {createItem.text}
              </Typography>
            </Button>
          </ListItem>
        </Anchor>

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
