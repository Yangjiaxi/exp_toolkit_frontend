import { connect } from "react-redux";

import Index from "./component";

const mapStateToProps = ({
  component: { themeMode, themeColor, pageName },
}) => ({
  themeMode,
  themeColor,
  pageName,
});

export default connect(mapStateToProps)(Index);
