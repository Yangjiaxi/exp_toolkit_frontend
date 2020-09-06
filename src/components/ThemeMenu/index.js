import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";

import { changeThemeMode, changeThemeColor } from "../../redux/actions";

import ThemeMenu from "./component";

const mapStateToProps = ({
  component: { themeMode, themeColor },
}) => ({
  themeMode,
  themeColor,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeThemeMode,
      changeThemeColor,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ThemeMenu),
);
