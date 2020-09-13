import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";

import { deleteProjBegin } from "../../redux/actions";

import ProjectRow from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteProj: deleteProjBegin, pushUrl: push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectRow);
