import React, { memo, forwardRef, useState } from "react";

import {
  ChevronRight,
  Search,
  Clear,
  ArrowDownward,
  SaveAlt,
  Delete,
} from "@material-ui/icons";

import { Button, Grid, Grow, Typography, IconButton } from "@material-ui/core";

import MaterialTable from "material-table";
import Anchor from "../Anchor";
import Dialog from "../Dialog";

import useStyles from "./style";

const tableIcons = {
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
};

const DataTable = memo((props) => {
  const { title, columns, data, dataID, pushUrl, deleteExp, projectID } = props;
  const [isDense, setDense] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [deleteID, setDeleteID] = useState(-1);

  const classes = useStyles();

  const hanleDeleteExp = () => {
    setDialog(false);
    deleteExp(dataID[deleteID].expID, projectID);
  };

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
            header: { actions: "操作" },
            body: {
              emptyDataSourceMessage: "暂无数据",
            },
          }}
          components={{
            Action: (_props) => {
              return (
                <>
                  <IconButton
                    aria-label="delete"
                    className={classes.delete}
                    onClick={() => {
                      setDialog(true);
                      const {
                        data: {
                          tableData: { id },
                        },
                      } = _props;
                      setDeleteID(id);
                    }}
                    size="small"
                  >
                    <Delete fontSize="medium" />
                  </IconButton>
                  <Button
                    className={classes.moreInfo}
                    onClick={createClickHandler(_props)}
                    color="primary"
                    variant="outlined"
                    size="small"
                  >
                    详细
                  </Button>
                </>
              );
            },
          }}
        />
      </Grow>
      <Dialog
        title="确认"
        open={dialog}
        onConfirm={hanleDeleteExp}
        onCancel={() => setDialog(false)}
        content="确认要删除该实验吗"
      />
    </>
  );
});

export default DataTable;
