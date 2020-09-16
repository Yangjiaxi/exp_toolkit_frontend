import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  login,
  LOGIN_BEGIN,
  toggleProgress,
  enqueueSnackbar,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN_BEGIN),
    mergeMap(({ username, password }) =>
      ajax
        .post(
          `${API}/user/login`,
          JSON.stringify({
            username,
            password,
          }),
          { "Content-Type": "application/json" },
        )
        .pipe(
          mergeMap(({ response: res }) => {
            const { token, type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar("登陆成功", {
                  variant: "success",
                }),
                login(token),
              );
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress()),
          catchError((err) => errHandler(err)),
        ),
    ),
    catchError((err) => errHandler(err)),
  );
