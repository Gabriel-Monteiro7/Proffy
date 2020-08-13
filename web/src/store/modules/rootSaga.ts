import { all } from "redux-saga/effects";
import teacher from "./teacher/sagas";
export default function* rootSaga() {
  return yield all([teacher]);
}
