import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModifyProject from "./component";

import {
  changeBrowserPath,
  enqueueSnackbar,
  getProjectConfBegin,
  cleanUpConf,
  modifyProjBegin,
} from "../../redux/actions";

const mapStateToProps = ({
  content: {
    projConf: { title, appendix, fields },
    projConfLoaded,
  },
}) => ({
  title,
  appendix,
  fields,
  projConfLoaded,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getProjectConf: getProjectConfBegin,
      modifyProj: modifyProjBegin,
      enqueueSnackbar,
      cleanUpConf,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProject);
