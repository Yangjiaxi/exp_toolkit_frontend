import React, { memo, Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router";

import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import { colorDict } from "../../utils/color";

import Progress from "../../components/Progress";
import PageFrame from "../../components/Frame";
// import MiniFrame from "../../components/MiniFrame";
import Notifier from "../../components/Notifier";
import Snackbar from "../../components/Snackbar";

const ProjectList = lazy(() => import("../ProjectList"));
const About = lazy(() => import("../About"));
const Project = lazy(() => import("../Project"));
const NewProject = lazy(() => import("../NewProject"));
const NoMatch = lazy(() => import("../NoMatch"));

const Index = memo(({ themeMode, themeColor }) => {
  const mainFrame = (Component) => (props) => {
    const {
      match: {
        params: { projectID },
      },
    } = props;
    return (
      <PageFrame>
        <Suspense fallback={<Progress />}>
          <Component projectID={projectID || undefined} />
        </Suspense>
      </PageFrame>
    );
  };
  // const miniFrame = (Component) => () => (
  //   <MiniFrame>
  //     <Suspense fallback={<Progress />}>
  //       <Component />
  //     </Suspense>
  //   </MiniFrame>
  // );
  /**
   * MiniFrame主要负责注册与登陆，不需要获得路由参数
   * MainFrame主要负责登陆后的逻辑，有可能需要获得URL路由参数
   */

  const colorObj = colorDict[themeColor];
  const needChangeSecondary = ["red", "pink"].includes(themeColor);

  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: colorObj,
      secondary: needChangeSecondary ? colorDict.blue : undefined,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Snackbar>
        <Notifier />
      </Snackbar>
      <Switch>
        <Route path="/" exact render={mainFrame(ProjectList)} />
        <Route path="/about" exact render={mainFrame(About)} />
        <Route path="/create" exact render={mainFrame(NewProject)} />
        <Route path="/proj/:projectID" render={mainFrame(Project)} />
        <Route render={mainFrame(NoMatch)} />
      </Switch>
    </MuiThemeProvider>
  );
});

export default withRouter(Index);
