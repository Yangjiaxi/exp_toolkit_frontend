import React, { memo, useEffect } from "react";

import DocsTable from "../../components/ProjTable";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

const ExpList = memo(
  ({ changeBrowserPath, getRecent, recentDocs, shouldUpdate }) => {
    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.EXPLIST_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      if (shouldUpdate) getRecent();
    }, [shouldUpdate, getRecent]);

    // if (!recentDocs) {
    //   return <Loading />;
    // }

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
    const docs = tempData || [];
    const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

    return (
      <>
        <DocsTable data={sortedDocs} />
      </>
    );
  },
);

export default ExpList;
