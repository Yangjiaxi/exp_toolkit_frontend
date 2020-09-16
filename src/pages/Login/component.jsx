import React, { memo, useEffect, useState } from "react";
import { Redirect } from "react-router";

import { TextField, Button, Avatar, Grid, Typography } from "@material-ui/core";
import { Lock } from "@material-ui/icons";

import Progress from "../../components/Progress";
import Anchor from "../../components/Anchor";

import useStyles from "./style";
import { PAGE_NAME_DICT } from "../consts";

const Login = memo(
  ({ loggedIn, login, isLoading, changeBrowserPath, enqueueSnackbar }) => {
    const classes = useStyles();
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setName] = useState("");

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.LOGIN_PAGE);
    }, [changeBrowserPath]);

    if (loggedIn) {
      return <Redirect to="/" />;
    }

    const checkValid = () => {
      if (username.trim().length === 0) {
        enqueueSnackbar("用户名不能为空", {
          variant: "error",
        });
        return false;
      }
      if (password.trim().length === 0) {
        enqueueSnackbar("密码不能为空", {
          variant: "error",
        });
        return false;
      }
      return true;
    };

    const handleLogin = () => {
      login(username, password);
    };

    const handlePassword = ({ target: { value } }) => {
      setPassword(value);
    };

    const handlePressEnter = ({ keyCode }) => {
      if (keyCode === 13) {
        if (checkValid()) {
          handleLogin();
        }
      }
    };
    const handleName = ({ target: { value } }) => {
      setName(value);
    };
    return (
      <>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography variant="h6" gutterBottom>
          登录
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="用户名"
                variant="outlined"
                fullWidth
                required
                value={username}
                autoComplete="username"
                onChange={handleName}
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
                onKeyDown={handlePressEnter}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                onClick={handleLogin}
                disabled={!username || !password}
              >
                登录
              </Button>
            </Grid>
            <Grid item container justify="flex-end">
              <Anchor to="/register">
                <Typography color="primary">注册</Typography>
              </Anchor>
            </Grid>
          </Grid>
        </form>
        {isLoading && <Progress />}
      </>
    );
  },
);

export default Login;
