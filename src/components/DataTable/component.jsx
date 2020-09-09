import React, { memo, forwardRef } from "react";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";

import MaterialTable from "material-table";
import D from "./columns";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
};

const DataTable = memo((props) => {
  //   const {
  //     AllData: { columns, data },
  //   } = props;
  return (
    <MaterialTable
      title="Editable Example"
      //   columns={columns}
      //   data={data}
      columns={D.columns}
      data={D.data}
      icons={tableIcons}
    />
  );
});

export default DataTable;