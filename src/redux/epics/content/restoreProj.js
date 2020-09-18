import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  RESTORE_PROJECT_BEGIN,
  toggleProgress,
  getTrashBegin,
  enqueueSnackbar,
  restoreProjFinish,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler, checkToken } from "..";

export const restoreProjEpic = (action$) =>
  action$.pipe(
    ofType(RESTORE_PROJECT_BEGIN),
    mergeMap(({ id }) => {
      const token = checkToken();
      return ajax
        .get(`${API}/proj/restore/${id}`, {
          Authorization: `Bearer ${token}`,
        })
        .pipe(
          mergeMap(({ response: res }) => {
            const { type } = res;
            if (type === "success") {
              return of(
                enqueueSnackbar("恢复成功", { variant: "success" }),
                restoreProjFinish(),
                getTrashBegin(), // pull again
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
