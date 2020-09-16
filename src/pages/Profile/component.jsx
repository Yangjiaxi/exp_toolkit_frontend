import React, { memo, useEffect } from "react";

import { PAGE_NAME_DICT } from "../consts";

import Loading from "../../components/CircularProgress";
import InfoPanel from "../../components/InfoPanel";
import ChangePassword from "../../components/ChangePassword";

import useStyles from "./style";

const Profile = memo(({ changeBrowserPath, getUserInfo, info }) => {
  const classes = useStyles();

  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.PROFILE_PAGE);
    getUserInfo();
  }, [changeBrowserPath, getUserInfo]);

  if (!info) {
    return <Loading />;
  }
  return (
    <>
      <InfoPanel info={info} />
      <ChangePassword className={classes.change} />
    </>
  );
});

export default Profile;
