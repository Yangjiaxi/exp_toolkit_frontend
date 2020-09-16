import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ChangePassword from "./component";

import { enqueueSnackbar, changePasswordBegin } from "../../redux/actions";

const mapStateToProps = () => ({
  //   isLoading: !id,
  isLoading: false,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      enqueueSnackbar,
      changePassword: changePasswordBegin,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
