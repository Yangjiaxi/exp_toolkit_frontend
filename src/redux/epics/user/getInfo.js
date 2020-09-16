import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import {
  GET_USER_INFO_BEGIN,
  toggleProgress,
  getUserInfoFinish,
} from "../../actions";

import { API } from "../../const";

import { checkToken, customError, errHandler } from "..";

export const getInfoEpic = (action$) =>
  action$.pipe(
    ofType(GET_USER_INFO_BEGIN),
    mergeMap(() => {
      const token = checkToken();
      return ajax
        .getJSON(`${API}/user/info`, { Authorization: `Bearer ${token}` })
        .pipe(
          mergeMap((res) => {
            if (res.type === "success") {
              const { data } = res;
              return of(getUserInfoFinish(data));
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
