import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModifyProject from "./component";

import {
  changeBrowserPath,
  createProjBegin,
  enqueueSnackbar,
  getProjectConfBegin,
} from "../../redux/actions";

const mapStateToProps = ({ proj: { projectData } }) => ({
  projectData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      createProj: createProjBegin,
      getProjectConf: getProjectConfBegin,
      enqueueSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProject);
