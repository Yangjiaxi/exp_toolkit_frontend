import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Project from "./component";

import { changeBrowserPath, getProjInfoBegin } from "../../redux/actions";

const mapStateToProps = ({ proj: { info } }) => ({
  pinfo: info,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getInfo: getProjInfoBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);
