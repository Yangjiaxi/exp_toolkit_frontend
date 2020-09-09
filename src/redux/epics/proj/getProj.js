import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_PROJECT_BEGIN,
  toggleProgress,
  getProjFinish,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const getProjEpic = (action$) =>
  action$.pipe(
    ofType(GET_PROJECT_BEGIN),
    mergeMap(() => {
      //   const token = checkToken();
      return ajax.getJSON(`${API}/proj/list`).pipe(
        mergeMap((res) => {
          if (res.type === "success") {
            const { data } = res;
            return of(getProjFinish(data));
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
