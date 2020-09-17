import React, { memo, useEffect } from "react";
import moment from "moment";

import { Container, Button } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon } from "@material-ui/icons";

import Loading from "../../components/CircularProgress";
import DetailTable from "../../components/DetailTable";
import Anchor from "../../components/Anchor";

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
    title: "提交时间",
    field: `${columns.length}`,
    type: "time",
  });

  const dataContent = data.map((ele) => datasPiece(ele.datas, mapDict));

  const dataNeed = data.map((ele, index) => ({
    ...dataContent[index],
    [columns.length - 1]: moment(ele.createTime).fromNow(),
  }));

  const dataID = data.map((ele) => ({
    expID: ele._id,
  }));
  return { columns, dataNeed, dataID };
};

const Experiment = memo(
  ({ changeBrowserPath, expInfo, expID, getInfo, cleanUpExperiment }) => {
    const classes = useStyles();
    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.EXP_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      getInfo(expID);
      return () => cleanUpExperiment();
      // eslint-disable-next-line
    }, [expID]);

    if (!expInfo) {
      return <Loading />;
    }

    const { projectID, title } = expInfo;
    const { columns, dataNeed } = dataTransform(expInfo);

    // const { columns, data } = D;

    return (
      <Container maxWidth="xl" className={classes.root}>
        <Anchor to={`/proj/${projectID}`}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.back}
            startIcon={<ChevronLeftIcon />}
          >
            返回项目
          </Button>
        </Anchor>
        <DetailTable
          title={title}
          columns={columns.map((c) => ({ ...c, tableData: undefined }))}
          data={dataNeed}
        />
      </Container>
    );
  },
);

export default Experiment;
