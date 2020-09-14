import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Project from "./component";

import {
  changeBrowserPath,
  getProjInfoBegin,
  cleanUpProject,
  enqueueSnackbar,
} from "../../redux/actions";

const mapStateToProps = ({ proj: { info } }) => ({
  pinfo: info,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      cleanUpProject,
      getInfo: getProjInfoBegin,
      enqueueSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);
