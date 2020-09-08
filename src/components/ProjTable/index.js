import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {} from "../../redux/actions";

import DocsTable from "./component";

const mapStateToProps = ({ component: { languageName, isMobile } }) => ({
  languageName,
  isMobile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DocsTable);
