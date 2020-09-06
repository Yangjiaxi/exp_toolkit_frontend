import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleSlider, detectWidth } from "../../redux/actions";

import Frame from "./component";

const mapStateToProps = ({ component: { progressOn } }) => ({
  isLoading: progressOn,
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
