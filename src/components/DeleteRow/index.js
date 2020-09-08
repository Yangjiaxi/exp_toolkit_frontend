import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import { destroyDocBegin, restoreDocBegin } from "../../redux/actions";

import DocsRow from "./component";

const mapStateToProps = ({ component: { languageName } }) => ({
  languageName,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // destroyDoc: destroyDocBegin,
      // restoreDoc: restoreDocBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(DocsRow);
