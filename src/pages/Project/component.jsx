import React, { memo, useEffect } from "react";
import moment from "moment";

import { Container, Paper, TextField } from "@material-ui/core";

import Loading from "../../components/CircularProgress";
import DataTable from "../../components/DataTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const datasPiece = (datas, columns) =>
  datas.reduce(
    (prev, { key, value }) => ({
      ...prev,
      [columns[key]]: value,
    }),
    {},
  );

const dataTransform = (info) => {
  const { schema, data } = info;
  const mapDict = schema.reduce(
    (prev, ele, index) => ({
      ...prev,
      [ele]: `${index}`,
    }),
    {},
  );

  const columns = schema.map((ele, index) => ({
    title: ele,
    field: `${index}`,
  }));

  columns.push({
    title: "最后更新",
    field: `${columns.length}`,
    type: "time",
  });

  const dataContent = data.map((ele) => datasPiece(ele.datas, mapDict));

  const dataNeed = data.map((ele, index) => ({
    ...dataContent[index],
    [columns.length - 1]: moment(ele.lastUpdate).fromNow(),
  }));

  const dataID = data.map((ele) => ({
    expID: ele._id,
  }));
  return { columns, dataNeed, dataID };
};

const Project = memo(
  ({ changeBrowserPath, getInfo, pinfo, projectID, cleanUpProject }) => {
    const classes = useStyles();
    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.PROJECT_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      getInfo(projectID);
      return () => cleanUpProject();
      // eslint-disable-next-line
    }, [projectID]);

    if (!pinfo) {
      return <Loading />;
    }
    // console.log(pinfo);
    const { projectName, appendix, createTime } = pinfo;
    const { columns, dataNeed, dataID } = dataTransform(pinfo);

    return (
      <Container maxWidth="xl" className={classes.root}>
        <DataTable
          title={`${projectName}`}
          columns={columns}
          data={dataNeed}
          dataID={dataID}
        />
        <Paper className={classes.paper} elevation={3}>
          <TextField
            id="lastUpdate"
            label="项目创建时间"
            variant="outlined"
            size="medium"
            fullWidth
            defaultValue={`${moment(createTime).format("YYYY-MM-DD HH:mm:ss")}`}
            InputProps={{
              readOnly: true,
              classes: {
                input: classes.input,
              },
            }}
          />
          {}

          <TextField
            id="appendix"
            className={classes.appendix}
            label="附加信息"
            size="medium"
            multiline
            fullWidth
            variant="outlined"
            defaultValue={appendix}
            InputProps={{
              readOnly: true,
              classes: {
                input: classes.input,
              },
            }}
          />
        </Paper>
      </Container>
    );
  },
);

export default Project;
