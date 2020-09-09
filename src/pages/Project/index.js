import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Project from "./component";

import { changeBrowserPath } from "../../redux/actions";

const mapStateToProps = () => ({
  //   isLoading: !id,
  isLoading: false,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);