import React, { memo, useEffect } from "react";
import moment from "moment";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Container, Button } from "@material-ui/core";
import Loading from "../../components/CircularProgress";
import DetailTable from "../../components/DetailTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const D = {
  columns: [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ],
  data: [
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birthYear: 2017,
      birthCity: 34,
    },
  ],
};

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

const Experiment = memo(({ changeBrowserPath, expInfo, expID, getInfo }) => {
  const classes = useStyles();
  useEffect(() => {
    changeBrowserPath(PAGE_NAME_DICT.EXP_PAGE);
  }, [changeBrowserPath]);

  useEffect(() => {
    getInfo(expID);
  }, [getInfo, expID]);

  if (!expInfo) {
    return <Loading />;
  }
  const { columns, data } = D;

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        className={classes.back}
        startIcon={<ChevronLeftIcon />}
      >
        返回项目
      </Button>
      <DetailTable title="11" columns={columns} data={data} />
    </Container>
  );
});

export default Experiment;
