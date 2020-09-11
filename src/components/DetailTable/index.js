import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DetailTable from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailTable);
