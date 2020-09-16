import { ofType } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, mergeMap, startWith, endWith } from "rxjs/operators";

import { push } from "connected-react-router";

import {
  CREATE_PROJECT_BEGIN,
  toggleProgress,
  createProjFinish,
  enqueueSnackbar,
} from "../../actions";

import { API } from "../../const";

import { customError, errHandler, checkToken } from "..";

export const createProjEpic = (action$) =>
  action$.pipe(
    ofType(CREATE_PROJECT_BEGIN),
    mergeMap(({ uploadData }) => {
      const token = checkToken();
      return ajax
        .post(`${API}/proj/create`, JSON.stringify(uploadData), {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        })
        .pipe(
          mergeMap(({ response: res }) => {
            // console.log(res);
            if (res.type === "success") {
              const { _id } = res.data; //
              return of(
                enqueueSnackbar("创建成功", { variant: "success" }),
                createProjFinish(),
                push(`/proj/${_id}`),
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
