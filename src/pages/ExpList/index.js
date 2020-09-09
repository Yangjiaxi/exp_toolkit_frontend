import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getProjBegin } from "../../redux/actions";
// import { changeBrowserPath } from "../../redux/actions";

import ExpList from "./component";

const mapStateToProps = ({ proj: { projs } }) => ({
  projs,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getProj: getProjBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ExpList);
