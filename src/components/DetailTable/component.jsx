import React, { memo, forwardRef, useState, Fragment } from "react";

import ReactEcharts from "echarts-for-react"; // or var ReactEcharts = require('echarts-for-react');

import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  Search,
  Clear,
  ArrowDownward,
  SaveAlt,
} from "@material-ui/icons";

import MaterialTable from "material-table";
import {
  Button,
  Grid,
  Grow,
  Typography,
  MenuItem,
  Select,
  Paper,
} from "@material-ui/core";

import useStyles from "./style";

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
};

const DetailTable = memo(({ title, columns, data }) => {
  const classes = useStyles();
  const [isDense, setDense] = useState(false);
  const [plotKey, setplotKey] = useState("");

  const handleChangeSelect = (event) => {
    setplotKey(event.target.value);
  };

  const selectContent = () => {
    console.log(columns);
    console.log(data);
    const res = columns
      .filter((ele) => {
        const num = data[0][ele.field];
        return !Number.isNaN(Number(num));
      })
      .map((ele) => [ele.field, ele.title]);

    return res;
  };

  const res = selectContent();

  const getOption = () => {
    // console.log(plotKey);
    // console.log(data);
    const plotX = data.map((ele, index) => index);
    const plotY = data.map((ele) => ele[plotKey]);

    const option = {
      legend: {
        data: [columns[Number(plotKey)].title],
        // data: ["sss"],
      },
      tooltip: {},
      xAxis: {
        data: plotX,
      },
      yAxis: {
        type: "value",
        min: (value) => {
          return value.min - 0.1 * (value.max - value.min);
        },
        max: (value) => {
          return value.max + 0.1 * (value.max - value.min);
        },
      },
      series: [
        {
          data: plotY,
          type: "line",
        },
      ],
      dataZoom: [
        {
          type: "slider",
          show: true,
          xAxisIndex: [0],
          start: 0,
          end: 100,
        },
        {
          type: "inside",
          xAxisIndex: [0],
          start: 0,
          end: 100,
        },
      ],
    };

    return option;
  };

  const handlePlot = () => {
    getOption();
  };

  const titleComp = (
    <Grid
      item
      container
      alignContent="flex-start"
      alignItems="center"
      justify="flex-start"
      spacing={2}
    >
      <Grid item>
        <Typography display="inline" variant="h6">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          onClick={() => setDense(!isDense)}
        >
          {`窄行：${isDense ? "开" : "关"}`}
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Grow in>
        <MaterialTable
          title={titleComp}
          columns={columns.map((c) => ({ ...c, tableData: undefined }))}
          data={data}
          icons={tableIcons}
          style={{
            padding: "1em",
          }}
          options={{
            padding: isDense ? "dense" : "default",
            paging: false,
            exportButton: true,
            search: false,
          }}
        />
      </Grow>
      <Paper className={classes.plot}>
        <Select
          labelId="Age"
          className={classes.plotButton}
          id="demo-simple-select"
          value={plotKey}
          onChange={handleChangeSelect}
          style={{ minWidth: 150 }}
        >
          {res.map((ele, index) => {
            return (
              <MenuItem key={index} value={ele[0]}>
                {ele[1]}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          variant="outlined"
          color="secondary"
          size="medium"
          onClick={handlePlot}
        >
          绘制该属性图像
        </Button>
        <ReactEcharts option={getOption()} notMerge lazyUpdate />
      </Paper>
    </>
  );
});

export default DetailTable;
