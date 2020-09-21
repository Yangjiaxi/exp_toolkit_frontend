import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  DELETE_EXP_BEGIN,
  toggleProgress,
  enqueueSnackbar,
  getProjFinish,
  getProjInfoBegin,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler, checkToken } from "..";

export const deleteExpEpic = (action$) =>
  action$.pipe(
    ofType(DELETE_EXP_BEGIN),
    mergeMap(({ id, projectID }) => {
      const token = checkToken();
      // return;
      return ajax
        .delete(`${API}/exp/delete/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar("删除成功", { variant: "success" }),
                getProjInfoBegin(projectID),
                getProjFinish(),
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
