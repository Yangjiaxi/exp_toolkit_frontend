const columns = {
  columns: [
    {
      title: "表头名称",
      field: "title",
      validate: (rowData) => rowData.title !== "",
      initialEditValue: "",
    },
    {
      title: "JSON Key",
      field: "key",
      validate: (rowData) => rowData.key !== "",
      initialEditValue: "",
    },
    {
      title: "是否在总表",
      field: "InMainTable",
      type: "boolean",
      initialEditValue: true,
    },
  ],
  data: [{ title: "状态", key: "Status", InMainTable: "true" }],
};
export default columns;