import React, { memo, forwardRef, useState, useEffect } from "react";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Search from "@material-ui/icons/Search";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import Check from "@material-ui/icons/Check";
import MaterialTable from "material-table";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

import AddBox from "@material-ui/icons/AddBox";

import { columns } from "./projCreate";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
};

const SchemaTable = memo(({ title, onChange, data }) => {
  const rowAddHandler = (newData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        onChange([...data, newData]);
      }, 100);
    });

  const rowUpdateHandler = (newData, oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        const cpyData = [...data];

        cpyData[cpyData.indexOf(oldData)] = newData;
        onChange(cpyData);
      }, 100);
    });

  const rowDeleteHandler = (oldData) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        const cpyData = [...data];

        cpyData.splice(cpyData.indexOf(oldData), 1);
        onChange(cpyData);
      }, 100);
    });

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      icons={tableIcons}
      options={{
        paging: false,
      }}
      localization={{
        body: {
          editRow: {
            deleteText: "确认删除¿",
          },
        },
      }}
      editable={{
        onRowAdd: rowAddHandler,
        onRowUpdate: rowUpdateHandler,
        onRowDelete: rowDeleteHandler,
      }}
    />
  );
});

export default SchemaTable;
