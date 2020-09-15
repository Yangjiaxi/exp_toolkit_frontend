import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleSlider, detectWidth } from "../../redux/actions";

import Frame from "./component";

const mapStateToProps = ({ component: { progressOn }, user: { token } }) => ({
  isLoading: progressOn,
  loggedIn: Boolean(token),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleSlider,
      detectWidth,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
