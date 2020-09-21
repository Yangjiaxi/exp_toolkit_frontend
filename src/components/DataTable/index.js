import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "connected-react-router";
import DataTable from "./component";
import { deleteExpBegin } from "../../redux/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ pushUrl: push, deleteExp: deleteExpBegin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
