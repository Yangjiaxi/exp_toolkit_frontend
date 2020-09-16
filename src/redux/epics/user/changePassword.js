import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  catchError,
  mergeMap,
  startWith,
  endWith,
  delay,
} from "rxjs/operators";

import {
  CHANGE_PASSWORD_BEGIN,
  toggleProgress,
  changePasswordFinish,
  logout,
  enqueueSnackbar,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const changePasswordEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_PASSWORD_BEGIN),
    mergeMap(({ oldPassword, newPassword }) => {
      const token = checkToken();
      return ajax
        .put(
          `${API}/user/info`,
          JSON.stringify({
            oldPassword,
            newPassword,
          }),
          {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        )
        .pipe(
          mergeMap(({ response: res }) => {
            if (res.type === "success") {
              return of(
                changePasswordFinish(),
                delay(1500),
                enqueueSnackbar("修改成功，即将返回登录界面", {
                  variant: "success",
                }),
                logout(),
              );
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress()),
          catchError((err) => errHandler(err)),
        );
    }),
    catchError((err) => errHandler(err)),
  );
