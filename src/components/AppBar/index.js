import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { toggleSlider } from "../../redux/actions";

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
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppBar));
