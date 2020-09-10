const projCreate = {
  columns: [
    {
      title: "表头名称",
      field: "name",
      validate: (rowData) => rowData.title !== "",
      initialEditValue: "",
    },
    {
      title: "JSON Key",
      field: "jsonKey",
      validate: (rowData) => rowData.key !== "",
      initialEditValue: "",
    },
    {
      title: "是否在总表",
      field: "showInProj",
      type: "boolean",
      initialEditValue: true,
    },
  ],
  data: [{ name: "状态", jsonKey: "Status", showInProj: "true" }],
};
export default projCreate;
