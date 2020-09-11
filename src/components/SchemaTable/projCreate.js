export const columns = [
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
