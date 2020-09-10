import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import DataTable from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ pushUrl: push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
