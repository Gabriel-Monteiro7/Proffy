import { takeLatest, put, all } from "redux-saga/effects";

import { toast } from "react-toastify";
import { insertSuccess } from "./actions";

export function* insert({ payload }: any) {
  try {
    const { data } = payload;

    yield put(insertSuccess(data));
    // toast.success(`Sucesso no cadastro`);
  } catch (erro) {
    toast.error("Erro na autenticação");
  }
}

export function* update({ payload }: any) {
  // try {
  //   const { data } = payload;
  //   yield put(insertSuccess(data));
  //   toast.success(`Sucesso no cadastro`);
  //   history.back();
  // } catch (erro) {
  //   toast.error("Erro na autenticação");
  // }
}
function* get({ payload }: any) {
  // try {
  //   const { data } = payload;
  //   yield put(insertSuccess(data));
  //   toast.success(`Sucesso no cadastro`);
  //   history.back();
  // } catch (erro) {
  //   toast.error("Erro na autenticação");
  // }
}

export default all([
  takeLatest("@teacher/INSERT_REQUEST", insert),
  takeLatest("@teacher/UPDATE_REQUEST", update),
  takeLatest("@teacher/GET_REQUEST", get),
]);
