import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getRecentDocsBegin } from "../../redux/actions";
// import { changeBrowserPath } from "../../redux/actions";

import Recent from "./component";

const mapStateToProps = ({ docs: { recent, shouldUpdateRecent } }) => ({
  recentDocs: recent,
  shouldUpdate: shouldUpdateRecent,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getRecent: getRecentDocsBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Recent);
