import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ProjectsTable from "./component";

const mapStateToProps = ({ component: { languageName, isMobile } }) => ({
  languageName,
  isMobile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsTable);
