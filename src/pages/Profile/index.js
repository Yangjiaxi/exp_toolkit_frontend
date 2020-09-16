import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Profile from "./component";

import { changeBrowserPath, getUserInfoBegin } from "../../redux/actions";

const mapStateToProps = ({ user: { info } }) => ({
  // isLoading: !id,
  info,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUserInfo: getUserInfoBegin,
      changeBrowserPath,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
