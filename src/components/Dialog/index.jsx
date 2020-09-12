import React, { memo } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const CustomDialog = memo(
  ({
    open,
    onCancel,
    onConfirm,
    content,
    title,
    confirm = "确定",
    cancel = "取消",
  }) => (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary" autoFocus>
          {cancel}
        </Button>
        <Button onClick={onConfirm} color="primary">
          {confirm}
        </Button>
      </DialogActions>
    </Dialog>
  ),
);

export default CustomDialog;
