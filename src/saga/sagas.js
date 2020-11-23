import {takeLatest, put, call} from 'redux-saga/effects'
import {REGISTER_USER, putUser, LOGIN_USER} from "../redux/actions/actions";
import {API_authUser, API_registerUser} from "../utils/API";

function* workerRegister({payload}) {
    try {
        const data = yield call(API_registerUser, payload);
        console.log(data)
        yield put(putUser(data))
    }

    catch (error) {
        console.log(error);
    }

}

export function* watchRegister() {
    yield takeLatest(REGISTER_USER, workerRegister)
}

function* workerLogin({payload}) {
    try {
        const data = yield call(API_authUser, payload);
        console.log(data)
        yield put(putUser(data))
    }

    catch (error) {
        console.log(error);
    }

}

export function* watchLogin() {
    yield takeLatest(LOGIN_USER, workerLogin)
}
