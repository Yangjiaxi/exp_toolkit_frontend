import { connect } from "react-redux";

import Index from "./component";

const mapStateToProps = ({ component: { themeMode, themeColor } }) => ({
  themeMode,
  themeColor,
});

export default connect(mapStateToProps)(Index);
