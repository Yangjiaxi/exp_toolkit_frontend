import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Project from "./component";

import { changeBrowserPath, checkoutContentStart } from "../../redux/actions";

const mapStateToProps = () => ({
  //   isLoading: !id,
  isLoading: false,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeBrowserPath,
      checkoutContent: checkoutContentStart,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Project);
