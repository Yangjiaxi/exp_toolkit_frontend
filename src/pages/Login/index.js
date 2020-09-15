import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { loginStart, changeBrowserPath } from "../../redux/actions";

import Login from "./component";

const mapStateToProps = ({
  user: { token },
  component: { progressOn, themeColor },
}) => ({
  loggedIn: Boolean(token),
  isLoading: progressOn,
  themeColor,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: loginStart,
      changeBrowserPath,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
