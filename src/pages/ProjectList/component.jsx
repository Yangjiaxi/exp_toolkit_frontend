import React, { memo, useEffect } from "react";

import ProjectsTable from "../../components/ProjTable";
import Loading from "../../components/CircularProgress";

import { PAGE_NAME_DICT } from "../consts";

const ProjectList = memo(({ changeBrowserPath, projList, getProj }) => {
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.PROJLIST_PAGE);
  }, [changeBrowserPath]);

  useEffect(() => {
    getProj();
  }, [getProj]);

  if (!projList) {
    return <Loading />;
  }

  const projects = projList || [];
  const sortedProjects = projects.sort(
    ({ lastUse: a }, { lastUse: b }) => b - a,
  );

  return (
    <>
      <ProjectsTable data={sortedProjects} />
    </>
  );
});

export default ProjectList;
