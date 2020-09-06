import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { detectWidth } from "../../redux/actions";

import MiniFrame from "./component";

const mapStateToProps = ({ component: { progressOn } }) => ({
  isLoading: progressOn,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      detectWidth,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(MiniFrame);
