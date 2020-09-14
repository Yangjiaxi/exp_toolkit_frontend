import React, { memo, forwardRef, useState } from "react";

import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  Search,
  Clear,
  ArrowDownward,
  SaveAlt,
} from "@material-ui/icons";

import MaterialTable from "material-table";
import { Button, Grid, Grow, Typography } from "@material-ui/core";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
};

const DetailTable = memo(({ title, columns, data }) => {
  const [isDense, setDense] = useState(false);

  const titleComp = (
    <Grid
      container
      alignContent="flex-start"
      alignItems="center"
      justify="flex-start"
      spacing={2}
    >
      <Grid item>
        <Typography display="inline" variant="h6">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => setDense(!isDense)}
        >
          {`窄行：${isDense ? "开" : "关"}`}
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Grow in>
      <MaterialTable
        title={titleComp}
        columns={columns.map((c) => ({ ...c, tableData: undefined }))}
        data={data}
        icons={tableIcons}
        style={{
          padding: "1em",
        }}
        options={{
          padding: isDense ? "dense" : "default",
          paging: false,
          exportButton: true,
          search: false,
        }}
      />
    </Grow>
  );
});

export default DetailTable;
