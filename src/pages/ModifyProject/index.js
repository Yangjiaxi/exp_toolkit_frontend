import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModifyProject from "./component";

import {
  changeBrowserPath,
  enqueueSnackbar,
  getProjectConfBegin,
} from "../../redux/actions";

const mapStateToProps = ({
  proj: {
    projectData: { title, appendix, fields },
    confLoaded,
  },
}) => ({
  title,
  appendix,
  fields,
  confLoaded,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getProjectConf: getProjectConfBegin,
      enqueueSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProject);
