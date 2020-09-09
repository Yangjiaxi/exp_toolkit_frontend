const D = {
  columns: [
    { title: "表头名称", field: "title" },
    { title: "JSON Key", field: "key" },
    {
      title: "是否在总表",
      field: "InMainTable",
      type: "boolean",
    },
  ],
  data: [{ title: "状态", key: "Status", InMainTable: "true" }],
};
export default D;
