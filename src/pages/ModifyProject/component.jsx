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
    confLoaded,
  }) => {
    const classes = useStyles();

    const [projName, setProjName] = useState("");
    const [appendixText, setAppendix] = useState("");
    const [schemaData, setSchemaData] = useState([]);

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.MODIFY_PAGE);
    }, [changeBrowserPath]);

    useEffect(() => {
      getProjectConf(projectID);
    }, [projectID, getProjectConf]);

    useEffect(() => {
      setProjName(title);
      setAppendix(appendix);
      setSchemaData(fields);
    }, [title, appendix, fields]);

    if (!confLoaded) {
      return <Loading />;
    }

    const handleChangeName = ({ target: { value } }) => {
      setProjName(value);
    };

    const handleAppendix = ({ target: { value } }) => {
      setAppendix(value);
    };

    const aggregateData = () => {
      if (projName.trim() === "") {
        enqueueSnackbar("项目名称不能为空", { variant: "error" });
        return;
      }
      const uploadData = {
        id: projectID,
        title: projName.trim(),
        appendix: appendix.trim(),
        fields: schemaData.map(({ tableData, ...rest }) => ({
          ...rest,
        })),
      };
      console.log(uploadData);
      // createProj(uploadData);
    };

    const tableChangeHandler = (newAllData) => {
      setSchemaData(newAllData);
    };

    return (
      <Container maxWidth="xl" className={classes.root}>
        <TextField
          id="projectName"
          label="项目名称"
          helperText="请输入项目名称"
          className={classes.projectName}
          value={projName}
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
          data={schemaData}
          onChange={tableChangeHandler}
        />
        <TextField
          id="appendix"
          label="附加信息"
          helperText="附加信息"
          className={classes.appendix}
          multiline
          rows={3}
          value={appendixText}
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
