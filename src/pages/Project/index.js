import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Project from "./component";

import {
  changeBrowserPath,
  getProjInfoBegin,
  cleanUpProject,
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
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);
