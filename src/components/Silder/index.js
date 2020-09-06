import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { toggleSlider } from "../../redux/actions";

import Slider from "./component";

const mapStateToProps = ({
  component: { drawerOpen, pageName, isMobile },
}) => ({
  open: drawerOpen,
  pageName,
  isMobile,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleSlider,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
