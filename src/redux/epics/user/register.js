import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import { REGISTER_START, toggleProgress, enqueueSnackbar } from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const registerEpic = (action$) =>
  action$.pipe(
    ofType(REGISTER_START),
    mergeMap(({ username, email, password }) =>
      ajax
        .post(
          `${API}/user/register`,
          JSON.stringify({
            username,
            email,
            password,
          }),
          {
            "Content-Type": "application/json",
          },
        )
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar("注册成功", {
                  variant: "success",
                }),
                push("/login"),
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
