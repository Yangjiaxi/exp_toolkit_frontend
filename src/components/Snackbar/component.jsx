import React, { memo } from "react";

import { SnackbarProvider } from "notistack";

// import useStyles from "./style";

const Snackbar = memo(({ children }) => {
  // const classes = useStyles();
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
      <>{children}</>
    </SnackbarProvider>
  );
});

export default Snackbar;
