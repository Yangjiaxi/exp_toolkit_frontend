import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Experiment from "./component";

import {
  changeBrowserPath,
  getExpInfoBegin,
  cleanUpExperiment,
} from "../../redux/actions";

const mapStateToProps = ({ content: { expInfo } }) => ({
  // isLoading: !id,
  expInfo,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getInfo: getExpInfoBegin,
      cleanUpExperiment,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Experiment);
