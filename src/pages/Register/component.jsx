import React, { memo, useEffect, useState } from "react";

import { TextField, Button, Avatar, Grid, Typography } from "@material-ui/core";

import { ThumbUp } from "@material-ui/icons";

import Progress from "../../components/Progress";
import Anchor from "../../components/Anchor";

import useStyles from "./style";
import { PAGE_NAME_DICT } from "../consts";

const Register = memo(
  ({ isLoading, register, enqueueSnackbar, changeBrowserPath }) => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.REGISTER_PAGE);
    }, [changeBrowserPath]);

    const handleRegister = () => {
      if (username && username.trim().length < 6) {
        enqueueSnackbar("用户名至少六位", {
          variant: "error",
        });
        return;
      }
      if (password && password.trim().length < 6) {
        enqueueSnackbar("密码至少六位", {
          variant: "error",
        });
        return;
      }
      register(username, email, password);
    };

    const handleUsername = ({ target: { value } }) => {
      setUsername(value);
    };

    const handlePassword = ({ target: { value } }) => {
      setPassword(value);
    };

    const handleEmail = ({ target: { value } }) => {
      setEmail(value);
    };

    return (
      <>
        <Avatar className={classes.avatar}>
          <ThumbUp />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          注册
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="邮箱"
                variant="outlined"
                fullWidth
                required
                value={email}
                autoComplete="email"
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="用户名"
                variant="outlined"
                fullWidth
                required
                value={username}
                autoComplete="username"
                onChange={handleUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="密码"
                variant="outlined"
                fullWidth
                required
                value={password}
                type="password"
                autoComplete="current-password"
                onChange={handlePassword}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                onClick={handleRegister}
                disabled={!email || !password || !username}
              >
                注册
              </Button>
            </Grid>
            <Grid item container justify="flex-end">
              <Anchor to="/login">
                <Typography color="primary">登陆</Typography>
              </Anchor>
            </Grid>
          </Grid>
        </form>
        {isLoading && <Progress />}
      </>
    );
  },
);

export default Register;
