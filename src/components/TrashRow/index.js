import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { restoreProjBegin } from "../../redux/actions";

import TrashRow from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ restoreProj: restoreProjBegin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TrashRow);
