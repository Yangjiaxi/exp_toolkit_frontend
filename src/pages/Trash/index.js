import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeBrowserPath, getTrashBegin } from "../../redux/actions";

import ProjectList from "./component";

const mapStateToProps = ({ content: { trashList } }) => ({
  trashList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      getTrash: getTrashBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
