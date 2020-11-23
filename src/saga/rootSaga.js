import {all} from "@redux-saga/core/effects";
import {watchLogin, watchPostToken, watchRegister} from "./sagas";

export const rootSaga = function*() {
    yield all([
        watchRegister(),
        watchLogin(),
        watchPostToken(),
    ])
}
