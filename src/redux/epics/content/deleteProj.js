import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  DELELE_PROJECT_BEGIN,
  toggleProgress,
  deleteProjFinish,
  enqueueSnackbar,
  getProjBegin,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const deleteProjEpic = (action$) =>
  action$.pipe(
    ofType(DELELE_PROJECT_BEGIN),
    mergeMap(({ id }) => {
      //   const token = checkToken();
      return ajax.delete(`${API}/proj/delete/${id}`).pipe(
        mergeMap(({ response: res }) => {
          const { type } = res;
          if (type === "success") {
            return of(
              enqueueSnackbar("删除成功", { variant: "success" }),
              deleteProjFinish(),
              getProjBegin(), // pull again
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
