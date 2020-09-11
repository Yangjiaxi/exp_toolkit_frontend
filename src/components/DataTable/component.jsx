import React, { memo, forwardRef } from "react";

import ChevronRight from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";

import MaterialTable from "material-table";
// import useStyles from "./style";

const tableIcons = {
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const DataTable = memo((props) => {
  const { title, columns, data, dataID, pushUrl } = props;

  const createClickHandler = (_props) => (event) => {
    // console.log(_props);
    const {
      data: {
        tableData: { id },
      },
    } = _props;
    pushUrl(`/exp/${dataID[id].expID}`);
  };

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
          onClick: (ev, d) => {},
        },
      ]}
      options={{
        actionsColumnIndex: -1,
        paging: false,
        actionsCellStyle: {
          width: "5em",
        },
      }}
      localization={{
        header: { actions: "详细信息" },
      }}
      components={{
        Action: (_props) => {
          return (
            <Button
              onClick={createClickHandler(_props)}
              color="primary"
              variant="outlined"
              size="small"
            >
              <ChevronRight />
            </Button>
          );
        },
      }}
    />
  );
});

export default DataTable;
