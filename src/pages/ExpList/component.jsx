import React, { memo, useEffect } from "react";

import DocsTable from "../../components/ProjTable";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

const ExpList = memo(({ changeBrowserPath, projs, getProj }) => {
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.EXPLIST_PAGE);
  }, [changeBrowserPath]);

  // if (!recentDocs) {
  //   return <Loading />;
  // }

  useEffect(() => {
    getProj();
  }, [getProj]);

  if (!projs) {
    return <Loading />;
  }

  const tempData = [
    {
      id: "5dab386259547a4fad66c920",
      createTime: 1571502178467,
      lastUse: 1599460977340,
      lastUpdate: 1599460977340,
      title: "实验1",
      deleted: false,
    },
    {
      id: "5dab386259547a4fad66scv23",
      createTime: 1671502178467,
      lastUse: 1799460977340,
      lastUpdate: 1899460977340,
      title: "实验2",
      deleted: false,
    },
  ];

  // const docs = recentDocs || [];
  const docs = projs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default ExpList;
