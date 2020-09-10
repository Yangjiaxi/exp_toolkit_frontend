import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import NewProject from "./component";

import {
  changeBrowserPath,
  createProjBegin,
  enqueueSnackbar,
} from "../../redux/actions";

const mapStateToProps = () => ({
  //   isLoading: !id,
  isLoading: false,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      createProj: createProjBegin,
      enqueueSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);
