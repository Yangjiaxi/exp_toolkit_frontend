import React, { memo, useState } from "react";

import "moment/min/locales";
import moment from "moment";

// import copy from "copy-to-clipboard";

import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";

import Dialog from "../Dialog";

const ProjectRow = memo((props) => {
  const {
    rowData: { title, lastUse, lastUpdate, _id: id },
    deleteProj,
    disableDivider,
    pushUrl,
  } = props;

  const [anchorDoc, setAnchorDoc] = useState(null);
  const [dialog, setDialog] = useState(false);

  const handleJumpToDoc = () => {
    pushUrl(`/proj/${id}`);
  };

  const handleClickDelete = () => {
    setAnchorDoc(null);
    setDialog(true);
  };

  const handleDelete = () => {
    setDialog(false);
    deleteProj(id);
  };

  const handleClickButton = ({ currentTarget }) => {
    setAnchorDoc(currentTarget);
  };

  const timeWords = () => {
    const lastUpdateWord = lastUpdate
      ? moment(lastUpdate).format("YYYY-MM-DD HH:mm:ss")
      : "暂无";
    return (
      <>
        <Typography component="span" display="block">
          {`最后查看: ${moment(lastUse).format("YYYY-MM-DD HH:mm:ss")}`}
        </Typography>
        <Typography component="span" display="block">
          {`最新更新: ${lastUpdateWord}`}
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
      <ListItem button onClick={handleJumpToDoc}>
        <ListItemText primary={titleWords()} secondary={timeWords()} />
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
        <MenuItem onClick={handleClickDelete}>删除</MenuItem>
      </Menu>
      <Dialog
        title="确认"
        open={dialog}
        onConfirm={handleDelete}
        onCancel={() => setDialog(false)}
        content="确认要删除嘛？QAQ"
      />
    </>
  );
});

export default ProjectRow;
