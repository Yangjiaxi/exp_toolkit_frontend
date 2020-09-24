import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailTable from "./component";
import { enqueueSnackbar } from "../../redux/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ enqueueSnackbar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailTable);
