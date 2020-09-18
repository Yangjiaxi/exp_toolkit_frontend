import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath } from "../../redux/actions";

import Error from "./component";

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeBrowserPath }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Error);
