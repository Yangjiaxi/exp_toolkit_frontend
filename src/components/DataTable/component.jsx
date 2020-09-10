import React, { memo, forwardRef } from "react";

import { Button } from "@material-ui/core";

import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import MaterialTable from "material-table";
// import useStyles from "./style";

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
};

const DataTable = memo((props) => {
  const { title, columns, data, dataID, pushUrl } = props;

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      icons={tableIcons}
      style={{
        padding: "1em",
      }}
      actions={[
        {
          icon: tableIcons.NextPage,
          tooltip: "More info",
          onClick: (event, rowData) => {
            const i = data.indexOf(rowData);
            pushUrl(`/exp/${dataID[i].expID}`);
          },
        },
      ]}
      options={{
        actionsColumnIndex: -1,
        paging: false,
      }}
      localization={{
        header: { actions: "详细信息" },
      }}
    />
  );
});

export default DataTable;
