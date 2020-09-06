import React, { memo } from "react";
import { Link } from "react-router-dom";

const Anchor = memo(({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      outline: "none",
      color: "inherit",
    }}
  >
    {children}
  </Link>
));

export default Anchor;
