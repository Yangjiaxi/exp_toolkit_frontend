import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { toggleSlider, logout } from "../../redux/actions";

import AppBar from "./component";

const mapStateToProps = ({
  component: { themeColor, pageName, isMobile },
}) => ({
  themeColor,
  pageName,
  isMobile,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleSlider,
      logout,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar));
