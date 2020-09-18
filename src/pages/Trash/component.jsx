import React, { memo, useEffect } from "react";

import ProjectsTable from "../../components/ProjTable";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

const TrashList = memo(({ changeBrowserPath, trashList, getTrash }) => {
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.TRASH_PAGE);
  }, [changeBrowserPath]);

  useEffect(() => {
    getTrash();
  }, [getTrash]);

  if (!trashList) {
    return <Loading />;
  }

  const projects = trashList || [];
  const sortedProjects = projects.sort(
    ({ lastUse: a }, { lastUse: b }) => b - a,
  );

  return (
    <>
      <ProjectsTable data={sortedProjects} isTrash />
    </>
  );
});

export default TrashList;
