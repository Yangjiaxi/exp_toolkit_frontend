import React, { memo, useState } from "react";

import { Typography, Paper, TextField, Grid, Button } from "@material-ui/core";

import { Check } from "@material-ui/icons";

import useStyles from "./style";

const ChangePassword = memo(({ enqueueSnackbar, changePassword }) => {
  const classes = useStyles();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNew, setConfirmNew] = useState("");

  const handleChange = (cb) => ({ target: { value } }) => {
    cb(value);
  };

  const handleChangePassword = () => {
    if (
      oldPassword.trim().length < 6 ||
      newPassword.trim().length < 6 ||
      confirmNew.trim().length < 6
    ) {
      enqueueSnackbar("格式错误", {
        variant: "error",
      });
      return;
    }
    if (newPassword.trim() !== confirmNew.trim()) {
      enqueueSnackbar("新密码不一致", {
        variant: "error",
      });
      return;
    }
    changePassword(oldPassword, newPassword);
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5">修改密码</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">建议定期修改密码哟</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="原密码"
            variant="outlined"
            fullWidth
            required
            value={oldPassword}
            autoComplete="password"
            onChange={handleChange(setOldPassword)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="新密码"
            variant="outlined"
            fullWidth
            required
            value={newPassword}
            autoComplete="password"
            onChange={handleChange(setNewPassword)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="确认新密码"
            variant="outlined"
            fullWidth
            required
            value={confirmNew}
            autoComplete="password"
            onChange={handleChange(setConfirmNew)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleChangePassword}
            // size="medium"
            className={classes.button}
          >
            <Check />
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
});

export default ChangePassword;
