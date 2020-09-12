import React, { memo, useEffect, useState } from "react";

import { Container, TextField, Button } from "@material-ui/core";

import Loading from "../../components/CircularProgress";
import SchemaTable from "../../components/SchemaTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";

const NewProject = memo(
  ({ changeBrowserPath, isLoading, createProj, enqueueSnackbar }) => {
    const [projName, setProjName] = useState("");
    const [appendix, setAppendix] = useState("");
    // eslint-disable-next-line
    const [schemaData, setSchemaData] = useState([{ name: "状态", jsonKey: "Status", showInProj: true }]);

    const classes = useStyles();

    const handleChangeName = ({ target: { value } }) => {
      setProjName(value);
      // console.log(projName);
    };

    const handleAppendix = ({ target: { value } }) => {
      setAppendix(value);
      // console.log(projColumns);
    };

    const aggregateData = () => {
      if (projName.trim() === "") {
        enqueueSnackbar("项目名称不能为空", { variant: "error" });
        return;
      }
      const uploadData = {
        title: projName.trim(),
        appendix: appendix.trim(),
        fields: schemaData.map(({ tableData, ...rest }) => ({
          ...rest,
        })),
      };
      console.log(uploadData);
      createProj(uploadData);
    };

    const tableChangeHandler = (newAllData) => {
      setSchemaData(newAllData);
    };

    useEffect(() => {
      changeBrowserPath(PAGE_NAME_DICT.NEWPROJECT_PAGE);
    }, [changeBrowserPath]);

    if (isLoading) {
      return <Loading />;
    }

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
          value={appendix}
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

export default NewProject;
