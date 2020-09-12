import React, { memo, useEffect } from "react";

import ProjectsTable from "../../components/ProjTable";
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

  const projects = projs || [];
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
