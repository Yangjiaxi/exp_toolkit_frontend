import React, { memo, useState } from "react";

import "moment/min/locales";
import moment from "moment";

// import copy from "copy-to-clipboard";

import {
  Divider,
  Grow,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";

import Dialog from "../Dialog";

const TrashRow = memo((props) => {
  const {
    rowData: { title, deleteTime, _id: id },
    restoreProj,
    disableDivider,
  } = props;

  const [anchorDoc, setAnchorDoc] = useState(null);
  const [dialog, setDialog] = useState(false);

  const handleClickRestore = () => {
    setAnchorDoc(null);
    setDialog(true);
  };

  const handleDelete = () => {
    setDialog(false);
    restoreProj(id);
  };

  const handleClickButton = ({ currentTarget }) => {
    setAnchorDoc(currentTarget);
  };

  const timeWords = () => {
    const deleteWord = moment(deleteTime).format("YYYY-MM-DD HH:mm:ss");
    return (
      <>
        <Typography component="span" display="block">
          {`删除时间: ${deleteWord}`}
        </Typography>
      </>
    );
  };

  const titleWords = () => (
    <>
      <Typography display="inline" component="span">
        {`${title}  `}
      </Typography>
    </>
  );

  return (
    <>
      <ListItem>
        <Grow in>
          <ListItemText primary={titleWords()} secondary={timeWords()} />
        </Grow>
        <ListItemSecondaryAction>
          <IconButton onClick={handleClickButton}>
            <MenuIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {!disableDivider && <Divider variant="middle" />}
      <Menu
        anchorEl={anchorDoc}
        open={Boolean(anchorDoc)}
        onClose={() => setAnchorDoc(null)}
      >
        <MenuItem onClick={handleClickRestore}>恢复</MenuItem>
      </Menu>
      <Dialog
        title="确认"
        open={dialog}
        onConfirm={handleDelete}
        onCancel={() => setDialog(false)}
        content="确认恢复吗？"
      />
    </>
  );
});

export default TrashRow;
