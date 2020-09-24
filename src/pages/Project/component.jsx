import React, { memo, useEffect } from "react";
import moment from "moment";
import {
  Container,
  Paper,
  TextField,
  Grow,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import copy from "copy-to-clipboard";
import { omit, pick } from "lodash";

import { FileCopy } from "@material-ui/icons";
import Loading from "../../components/CircularProgress";
import DataTable from "../../components/DataTable";

import { PAGE_NAME_DICT } from "../consts";

import { API } from "../../redux/const";

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

  const len = columns.length;

  columns.push({
    title: "备注",
    field: `${len}`,
  });

  columns.push({
    title: "最后更新",
    field: `${len + 1}`,
    type: "time",
  });

  const dataContent = data.map((ele) => datasPiece(ele.datas, mapDict));

  const allData = data.map((ele, index) => ({
    ...dataContent[index],
    [columns.length - 2]: ele.comment,
    [columns.length - 1]: ele.lastUpdate,
    [columns.length]: ele._id,
  }));

  allData.sort((a, b) => {
    return b[columns.length - 1] - a[columns.length - 1];
  });

  const dataShow = allData.map((ele) => {
    const omitEle = omit(ele, columns.length);
    omitEle[columns.length - 1] = moment(omitEle[columns.length - 1]).fromNow();
    return omitEle;
  });

  const dataId = allData.map((ele) => {
    return { expID: pick(ele, columns.length)[columns.length] };
  });

  return { columns, dataShow, dataId };
};

const Project = memo(
  ({
    changeBrowserPath,
    getInfo,
    projInfo,
    projectID,
    cleanUpProject,
    enqueueSnackbar,
  }) => {
    const classes = useStyles();

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.PROJECT_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      getInfo(projectID);
      return () => {
        cleanUpProject();
      };
      // eslint-disable-next-line
    }, [projectID]);

    if (!projInfo) {
      return <Loading />;
    }
    const { projectName, appendix, createTime } = projInfo;
    const { columns, dataShow, dataId } = dataTransform(projInfo);

    return (
      <Container maxWidth="xl" className={classes.root}>
        <DataTable
          title={`${projectName}`}
          columns={columns.map((c) => ({ ...c, tableData: undefined }))}
          data={dataShow}
          dataID={dataId}
          projectID={projectID}
        />
        <Grow in>
          <Paper className={classes.paper} elevation={3}>
            <TextField
              id="lastUpdate"
              label="项目创建时间"
              variant="outlined"
              size="medium"
              fullWidth
              defaultValue={`${moment(createTime).format(
                "YYYY-MM-DD HH:mm:ss",
              )}`}
              InputProps={{
                readOnly: true,
                classes: {
                  input: classes.input,
                },
              }}
            />
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
        </Grow>
        <Grow in>
          <Paper className={classes.paper} elevation={3}>
            <TextField
              id="address"
              className={classes.address}
              label="服务器地址"
              fullWidth
              variant="outlined"
              value={API}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        copy(API);
                        enqueueSnackbar("复制地址成功", { variant: "success" });
                      }}
                      edge="end"
                    >
                      <FileCopy />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="Id"
              className={classes.id}
              label="项目ID"
              fullWidth
              value={projectID}
              variant="outlined"
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        copy(projectID);
                        enqueueSnackbar("复制ID成功", { variant: "success" });
                      }}
                      edge="end"
                    >
                      <FileCopy />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
        </Grow>
      </Container>
    );
  },
);

export default Project;
