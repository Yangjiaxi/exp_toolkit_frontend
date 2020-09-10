import React, { memo, useEffect, useState } from "react";

import { Container, TextField, Button } from "@material-ui/core";
import Loading from "../../components/CircularProgress";
import SchemaTable from "../../components/SchemaTable";

import { PAGE_NAME_DICT } from "../consts";

import useStyles from "./style";
import projCreate from "./projCreate";

const NewProject = memo(
  ({ changeBrowserPath, isLoading, createProj, enqueueSnackbar }) => {
    const [projName, setProjName] = useState("");
    const [appendix, setAppendix] = useState("");
    // eslint-disable-next-line
    const [projColumns, setColumns] = useState(projCreate.columns);
    const [projData, setData] = useState(projCreate.data);

    const classes = useStyles();

    const handleChangeName = ({ target: { value } }) => {
      setProjName(value);
      // console.log(projName);
    };

    const handleAppendix = ({ target: { value } }) => {
      setAppendix(value);
      // console.log(projColumns);
      console.log(projData);
    };

    const aggregateData = () => {
      const uploadData = {
        title: projName,
        appendix,
        fields: projData.map(({ tableData, ...rest }) => ({ ...rest })),
      };
      console.log(uploadData);
      if (projName.trim() === "") {
        enqueueSnackbar("项目名称不能为空", { variant: "error" });
        return;
      }
      createProj(uploadData);
    };

    const onChange = (data) => {
      setData(data);
    };
    // useEffect(() => {
    //   createProj(uploadData);
    // }, [createProj, projectID]);

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
          data={projData}
          columns={projColumns}
          onChange={onChange}
        />
        <TextField
          id="appendix"
          label="附加信息"
          helperText="附加信息"
          className={classes.appendix}
          multiline
          rows={3}
          defaultValue=""
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
