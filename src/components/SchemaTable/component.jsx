import React, { memo, forwardRef } from "react";

import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  Search,
  Clear,
  DeleteOutline,
  Edit,
  Check,
  ArrowDownward,
  AddCircle,
} from "@material-ui/icons";

import MaterialTable from "material-table";

const columns = [
  {
    title: "表头名称",
    field: "name",
    validate: (rowData) => rowData.name !== "",
    initialEditValue: "",
  },
  {
    title: "JSON Key",
    field: "jsonKey",
    validate: (rowData) => rowData.jsonKey !== "",
    initialEditValue: "",
  },
  {
    title: "是否在总表",
    field: "showInProj",
    type: "boolean",
    initialEditValue: true,
  },
];

const tableIcons = {
  Add: forwardRef((props, ref) => <AddCircle {...props} ref={ref} />),
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
      columns={columns.map((c) => ({ ...c, tableData: undefined }))}
      data={data}
      icons={tableIcons}
      options={{
        paging: false,
        actionsColumnIndex: -1,
      }}
      localization={{
        body: {
          editRow: {
            deleteText: "确认删除？",
          },
        },
        header: { actions: "操作" },
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
