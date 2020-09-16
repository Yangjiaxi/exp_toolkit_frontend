import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import {
  MODIFY_PROJECT_BEGIN,
  toggleProgress,
  modifyProjFinish,
  enqueueSnackbar,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler, checkToken } from "..";

export const modifyProjEpic = (action$) =>
  action$.pipe(
    ofType(MODIFY_PROJECT_BEGIN),
    mergeMap(({ uploadData, id }) => {
      const token = checkToken();
      return ajax
        .post(`${API}/proj/modify/${id}`, JSON.stringify(uploadData), {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        })
        .pipe(
          mergeMap(({ response: res }) => {
            // console.log(res);
            if (res.type === "success") {
              return of(
                enqueueSnackbar("修改成功", { variant: "success" }),
                modifyProjFinish(),
                push(`/proj/${id}`),
              );
            }
            throw customError(res);
          }),
          startWith(toggleProgress(true)),
          endWith(toggleProgress(false)),
          catchError((err) => errHandler(err)),
        );
    }),
    catchError((err) => errHandler(err)),
  );
