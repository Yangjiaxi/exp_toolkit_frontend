import React, { memo, forwardRef } from "react";

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
  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      icons={tableIcons}
      style={{
        padding: "1em",
      }}
      options={{
        paging: false,
        exportButton: true,
      }}
    />
  );
});

export default DetailTable;
