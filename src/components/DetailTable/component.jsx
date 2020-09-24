import React, { memo, forwardRef, useState } from "react";

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

const DetailTable = memo(({ title, columns, data, enqueueSnackbar }) => {
  const classes = useStyles();
  if (data.length === 0)
    return (
      <Paper>
        <Typography variant="h4" align="center" className={classes.noText}>
          暂无数据
        </Typography>
      </Paper>
    );

  const [isDense, setDense] = useState(false);
  const [plotKey, setplotKey] = useState("");
  const [isPlot, setIsPlot] = useState(false);

  const handleChangeSelect = (event) => {
    setplotKey(event.target.value);
  };

  const selectContent = () => {
    const res = columns
      .filter((ele) => {
        const num = data[0][ele.field];
        return !Number.isNaN(Number(num));
      })
      .map((ele) => [ele.field, ele.title]);

    return res;
  };

  const res = selectContent();

  const getPlot = () => {
    const plotX = data.map((ele, index) => index + 1);
    const plotY = data.map((ele) => ele[plotKey]);

    const option = {
      title: {
        left: "center",
        text: `${isPlot ? columns[plotKey].title : ""}`,
      },
      tooltip: {
        trigger: "axis",
        position(pt) {
          return [pt[0], "10%"];
        },
      },
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
        axisLabel: {
          formatter(value) {
            return Number.parseFloat(value).toFixed(3);
          },
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

    return <ReactEcharts option={option} notMerge lazyUpdate />;
  };

  const handlePlot = () => {
    if (plotKey === "") {
      enqueueSnackbar("请选择需要绘制的数据列", {
        variant: "warning",
      });
      return;
    }
    setIsPlot(true);
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
            绘制折线图
          </Button>
          {isPlot ? (
            getPlot()
          ) : (
            <Typography className={classes.text} align="center">
              选择属性列来绘制图像
            </Typography>
          )}
        </Paper>
      </Grow>
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
    </>
  );
});

export default DetailTable;
