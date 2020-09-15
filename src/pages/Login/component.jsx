import React, { memo, useEffect, useState } from "react";
import { Redirect } from "react-router";

import { TextField, Button, Avatar, Grid, Typography } from "@material-ui/core";
import { Lock } from "@material-ui/icons";

import Progress from "../../components/Progress";
import Anchor from "../../components/Anchor";

import useStyles from "./style";
import { PAGE_NAME_DICT } from "../consts";

const Login = memo(({ loggedIn, login, isLoading, changeBrowserPath }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.LOGIN_PAGE);
  }, [changeBrowserPath]);

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  const handleLogin = () => {
    login(email, password);
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
        <Lock />
      </Avatar>
      <Typography variant="h6" gutterBottom>
        密码
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
              onClick={handleLogin}
              disabled={!email || !password}
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
});

export default Login;
