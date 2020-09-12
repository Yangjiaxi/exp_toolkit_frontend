import React, { memo } from "react";

import { SnackbarProvider } from "notistack";

const Snackbar = memo(({ children }) => {
  return (
    <SnackbarProvider maxSnack={5} autoHideDuration={3000}>
      <>{children}</>
    </SnackbarProvider>
  );
});

export default Snackbar;
