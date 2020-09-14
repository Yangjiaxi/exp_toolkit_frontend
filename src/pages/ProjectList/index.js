import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getProjBegin } from "../../redux/actions";
// import { changeBrowserPath } from "../../redux/actions";

import ProjectList from "./component";

const mapStateToProps = ({ content: { projList } }) => ({
  projList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getProj: getProjBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
