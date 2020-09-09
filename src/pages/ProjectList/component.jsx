import React, { memo, useEffect } from "react";

import DocsTable from "../../components/ProjTable";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

const ProjectList = memo(({ changeBrowserPath, projs, getProj }) => {
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.EXPLIST_PAGE);
  }, [changeBrowserPath]);

  useEffect(() => {
    getProj();
  }, [getProj]);

  console.log(projs);
  if (!projs) {
    return <Loading />;
  }

  // const docs = recentDocs || [];
  const docs = projs || [];
  const sortedDocs = docs.sort(({ lastUse: a }, { lastUse: b }) => b - a);

  return (
    <>
      <DocsTable data={sortedDocs} />
    </>
  );
});

export default ProjectList;
