import React, { memo, useState } from "react";

// import "../ExpRow/node_modules/moment/min/locales";
import moment from "moment";

import Chip from "@material-ui/core/Chip";
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

const DeleteRow = memo((props) => {
  const {
    rowData: { title, owned, id, deleteTime },
    languageName,
    destroyDoc,
    restoreDoc,
    disableDivider,
  } = props;
  const classes = useStyles();

  const [anchorDoc, setAnchorDoc] = useState(null);
  const [dialog, setDialog] = useState(false);

  moment.locale(languageName);

  const handleClickRestore = () => {
    setAnchorDoc(null);
    restoreDoc(id);
  };

  const handleClickDestroy = () => {
    setAnchorDoc(null);
    setDialog(true);
  };

  const handleDestroy = () => {
    setDialog(false);
    destroyDoc(id);
  };

  const ownMarker = () => {
    return (
      <Chip
        className={classes.chips}
        component="span"
        color="primary"
        size="small"
        // label={
        //   <TextComp term={owned ? i18nHelper.ownedDoc : i18nHelper.sharedDoc} />
        // }
      />
    );
  };

  const handleClickButton = ({ currentTarget }) => {
    setAnchorDoc(currentTarget);
  };

  const timeWords = () => {
    return (
      <Typography component="span" display="block">
        {/* <TextComp term={i18nHelper.deleteTime} /> */}
        {moment(deleteTime).format("YYYY-MM-DD")}
      </Typography>
    );
  };

  const titleWords = () => (
    <>
      <Typography display="inline" component="span">
        {title}
      </Typography>
      {ownMarker()}
    </>
  );

  return (
    <>
      <ListItem>
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
        <MenuItem onClick={handleClickRestore}>
          恢复
          {/* <TextComp term={i18nHelper.restoreButton} /> */}
        </MenuItem>
        <MenuItem onClick={handleClickDestroy}>
          销毁
          {/* <TextComp term={i18nHelper.destroyButton} /> */}
        </MenuItem>
      </Menu>
      <Dialog
        open={dialog}
        onConfirm={handleDestroy}
        onCancel={() => setDialog(false)}
        // content={<TextComp term={i18nHelper.destroyHint} />}
      />
    </>
  );
});

export default DeleteRow;
