import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  registerStart,
  enqueueSnackbar,
  changeBrowserPath,
} from "../../redux/actions";

import Login from "./component";

const mapStateToProps = ({
  user: { token },
  component: { progressOn, themeColor },
}) => ({
  loggedIn: Boolean(token),
  themeColor,
  isLoading: progressOn,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      enqueueSnackbar,
      register: registerStart,
      changeBrowserPath,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
