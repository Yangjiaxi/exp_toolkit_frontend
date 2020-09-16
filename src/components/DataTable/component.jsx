import React, { memo, forwardRef, useState } from "react";

import {
  ChevronRight,
  Search,
  Clear,
  ArrowDownward,
  SaveAlt,
} from "@material-ui/icons";
import { Button, Grid, Grow, Typography, FormControl } from "@material-ui/core";

import MaterialTable from "material-table";
import Anchor from "../Anchor";

// import useStyles from "./style";

const tableIcons = {
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
};

const DataTable = memo((props) => {
  const { title, columns, data, dataID, pushUrl, projectID } = props;
  const [isDense, setDense] = useState(false);
  // const classes = useStyles();

  const createClickHandler = (_props) => () => {
    const {
      data: {
        tableData: { id },
      },
    } = _props;
    pushUrl(`/exp/${dataID[id].expID}`);
  };

  const titleComp = (
    <Grid
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
        <Anchor to={`/modify/${projectID}`}>
          <Button variant="outlined" size="small" color="secondary">
            修改
          </Button>
        </Anchor>
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
    <Grow in>
      <MaterialTable
        title={titleComp}
        // columns={columns}
        columns={columns.map((c) => ({ ...c, tableData: undefined }))}
        data={data}
        icons={tableIcons}
        style={{
          padding: "1em",
        }}
        actions={[
          {
            icon: tableIcons.NextPage,
            tooltip: "More info",
            onClick: (ev, d) => {},
          },
        ]}
        options={{
          search: false,
          padding: isDense ? "dense" : "default",
          actionsColumnIndex: -1,
          paging: false,
          actionsCellStyle: {
            width: "5em",
          },
          exportButton: true,
        }}
        localization={{
          header: { actions: "详细" },
          body: {
            emptyDataSourceMessage: "暂无数据",
          },
        }}
        components={{
          Action: (_props) => {
            return (
              <Button
                onClick={createClickHandler(_props)}
                color="primary"
                variant="outlined"
                size="small"
              >
                <ChevronRight fontSize="small" />
              </Button>
            );
          },
        }}
      />
    </Grow>
  );
});

export default DataTable;
