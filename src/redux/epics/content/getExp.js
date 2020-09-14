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
  GET_EXP_INFO_BEGIN,
  toggleProgress,
  getExpInfoFinish,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const getExpEpic = (action$) =>
  action$.pipe(
    ofType(GET_EXP_INFO_BEGIN),
    mergeMap(({ expID }) => {
      return ajax.getJSON(`${API}/exp/info/${expID}`).pipe(
        mergeMap((res) => {
          if (res.type === "success") {
            const { data } = res;
            return of(getExpInfoFinish(data));
          }
          throw customError(res);
        }),
        delay(500),
        startWith(toggleProgress(true)),
        endWith(toggleProgress(false)),
        catchError((err) => errHandler(err)),
      );
    }),
    catchError((err) => errHandler(err)),
  );
