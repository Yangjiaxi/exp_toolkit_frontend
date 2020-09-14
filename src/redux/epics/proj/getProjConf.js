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
  GET_PROJECT_CONF_BEGIN,
  toggleProgress,
  getProjectConfFinish,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler } from "..";

export const getProjConfEpic = (action$) =>
  action$.pipe(
    ofType(GET_PROJECT_CONF_BEGIN),
    mergeMap(({ id }) => {
      //   const token = checkToken();
      return ajax.getJSON(`${API}/proj/conf/${id}`).pipe(
        mergeMap((res) => {
          if (res.type === "success") {
            const { data } = res;
            return of(getProjectConfFinish(data));
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
