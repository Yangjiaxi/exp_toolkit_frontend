import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Experiment from "./component";

import { changeBrowserPath, getExpInfoBegin } from "../../redux/actions";

const mapStateToProps = ({ proj: { expInfo } }) => ({
  // isLoading: !id,
  expInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getInfo: getExpInfoBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Experiment);
