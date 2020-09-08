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

// import { i18nHelper, TextTermMaker } from "../../i18n";

import useStyles from "./style";

// const TextComp = TextTermMaker("DocsTable");

const DocRow = memo((props) => {
  const {
    rowData: {
      title,
      createTime, // no
      lastUse, // no
      lastUpdate,
      deleted, // no
      id,
    },
    languageName,
    deleteDoc,
    disableDivider,
    pushUrl,
  } = props;
  const classes = useStyles();

  const [anchorDoc, setAnchorDoc] = useState(null);
  const [dialog, setDialog] = useState(false);

  moment.locale(languageName);

  const handleJumpToDoc = () => {
    pushUrl(`/proj/${id}`);
  };

  const handleDelete = () => {
    setDialog(false);
    deleteDoc(id);
  };

  const handleClickButton = ({ currentTarget }) => {
    setAnchorDoc(currentTarget);
  };

  const timeWords = () => {
    return (
      <>
        <Typography component="span" display="block">
          {`最后查看: ${moment(lastUse).format("YYYY-MM-DD HH:mm:ss")}`}
        </Typography>
        <Typography component="span" display="block">
          {`最新更新: ${moment(lastUpdate).format("YYYY-MM-DD HH:mm:ss")}`}
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
      <ListItem button disabled={deleted} onClick={handleJumpToDoc}>
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
        <MenuItem onClick={() => {}}>
          {/* <TextComp term={i18nHelper.deleteButton} /> */}
          删除
        </MenuItem>
      </Menu>
      <Dialog
        open={dialog}
        onConfirm={handleDelete}
        onCancel={() => setDialog(false)}
        // content={<TextComp term={i18nHelper.deleteHint} />}
      />
    </>
  );
});

export default DocRow;
