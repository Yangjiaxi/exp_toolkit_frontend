import React, { memo, useEffect, useState } from "react";

import { Container, TextField, Button } from "@material-ui/core";

import Loading from "../../components/CircularProgress";
import SchemaTable from "../../components/SchemaTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const ModifyProject = memo(
  ({
    changeBrowserPath,
    enqueueSnackbar,
    getProjectConf,
    projectID,
    title,
    appendix,
    fields,
    projConfLoaded,
    cleanUpConf,
    modifyProj,
  }) => {
    const classes = useStyles();

    const [state, setState] = useState({
      projName: title,
      appendixText: appendix,
      schemaData: fields,
    });

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.MODIFY_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      getProjectConf(projectID);
      return () => cleanUpConf();
      // eslint-disable-next-line
    }, [projectID]);

    useEffect(() => {
      setState({
        projName: title,
        appendixText: appendix,
        schemaData: fields,
      });
    }, [title, appendix, fields]);

    if (!projConfLoaded) {
      return <Loading />;
    }

    const handleChangeName = ({ target: { value } }) => {
      setState({
        ...state,
        projName: value,
      });
    };

    const handleAppendix = ({ target: { value } }) => {
      setState({
        ...state,
        appendixText: value,
      });
    };

    const aggregateData = () => {
      if (state.projName.trim() === "") {
        enqueueSnackbar("项目名称不能为空", { variant: "error" });
        return;
      }
      const uploadData = {
        title: state.projName.trim(),
        appendix: state.appendixText.trim(),
        fields: state.schemaData.map(({ tableData, ...rest }) => ({
          ...rest,
        })),
      };
      // console.log(uploadData);
      modifyProj(projectID, uploadData);
    };

    const tableChangeHandler = (newAllData) => {
      setState({
        ...state,
        schemaData: newAllData,
      });
    };

    return (
      <Container maxWidth="xl" className={classes.root}>
        <TextField
          id="projectName"
          label="项目名称"
          helperText="请输入项目名称"
          className={classes.projectName}
          value={state.projName}
          onChange={handleChangeName}
          size="medium"
          fullWidth
          required
          InputProps={{
            classes: {
              input: classes.input,
            },
          }}
          variant="outlined"
        />
        <SchemaTable
          title="项目数据列"
          data={state.schemaData}
          onChange={tableChangeHandler}
        />
        <TextField
          id="appendix"
          label="附加信息"
          helperText="附加信息"
          className={classes.appendix}
          multiline
          rows={3}
          value={state.appendixText}
          fullWidth
          onChange={handleAppendix}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.upload}
          onClick={aggregateData}
        >
          提交
        </Button>
      </Container>
    );
  },
);

export default ModifyProject;
