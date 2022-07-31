import React, { memo, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router";
import Helmet from "react-helmet";

import CssBaseline from "@material-ui/core/CssBaseline";
import createTheme from "@material-ui/core/styles/createTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import { PAGE_NAME_DICT_CN } from "../consts";
import { colorDict } from "../../utils/color";

import Progress from "../../components/Progress";
import PageFrame from "../../components/Frame";
import MiniFrame from "../../components/MiniFrame";
import Notifier from "../../components/Notifier";
import Snackbar from "../../components/Snackbar";

const Login = lazy(() => import("../Login"));
const Register = lazy(() => import("../Register"));

const ProjectList = lazy(() => import("../ProjectList"));
const Trash = lazy(() => import("../Trash"));
const About = lazy(() => import("../About"));
const Project = lazy(() => import("../Project"));
const Experiment = lazy(() => import("../Experiment"));
const NewProject = lazy(() => import("../NewProject"));
const ModifyProject = lazy(() => import("../ModifyProject"));
const Profile = lazy(() => import("../Profile"));

const Error = lazy(() => import("../Error"));

const Index = memo(({ themeMode, themeColor, pageName }) => {
  const mainFrame = (Component) => (props) => {
    const {
      match: {
        params: { projectID, expID },
      },
    } = props;
    return (
      <PageFrame>
        <Suspense fallback={<Progress />}>
          <Component
            projectID={projectID || undefined}
            expID={expID || undefined}
          />
        </Suspense>
      </PageFrame>
    );
  };
  const miniFrame = (Component) => () =>
    (
      <MiniFrame>
        <Suspense fallback={<Progress />}>
          <Component />
        </Suspense>
      </MiniFrame>
    );
  /**
   * MiniFrame主要负责注册与登陆，不需要获得路由参数
   * MainFrame主要负责登陆后的逻辑，有可能需要获得URL路由参数
   */

  const colorObj = colorDict[themeColor];
  const needChangeSecondary = ["red", "pink"].includes(themeColor);

  const theme = createTheme({
    palette: {
      type: themeMode,
      primary: colorObj,
      secondary: needChangeSecondary ? colorDict.blue : undefined,
    },
  });

  const pageNameCN = PAGE_NAME_DICT_CN[pageName] || pageName;

  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <meta
          name="theme-color"
          content={colorDict[themeColor][500]}
          data-react-helmet="true"
        />
        <title>{pageNameCN}</title>
      </Helmet>
      <CssBaseline />
      <Snackbar>
        <Notifier />
      </Snackbar>
      <Switch>
        <Route path="/login" exact render={miniFrame(Login)} />
        <Route path="/register" exact render={miniFrame(Register)} />
        <Route path="/" exact render={mainFrame(ProjectList)} />
        <Route path="/trash" exact render={mainFrame(Trash)} />
        <Route path="/about" exact render={mainFrame(About)} />
        <Route path="/create" exact render={mainFrame(NewProject)} />
        <Route
          path="/modify/:projectID"
          exact
          render={mainFrame(ModifyProject)}
        />
        <Route path="/proj/:projectID" render={mainFrame(Project)} />
        <Route path="/exp/:expID" render={mainFrame(Experiment)} />
        <Route path="/profile" exact render={mainFrame(Profile)} />
        <Route render={mainFrame(Error)} />
      </Switch>
    </MuiThemeProvider>
  );
});

export default withRouter(Index);
