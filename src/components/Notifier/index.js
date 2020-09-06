import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { removeSnackbar, closeSnackbar } from "../../redux/actions";

import Notifier from "./component";

const mapStateToProps = ({ component: { snackbars } }) => ({
  notifications: snackbars,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      removeSnackbar,
      closeSnackbar,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
