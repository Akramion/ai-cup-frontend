import {LOGIN_USER, POST_TOKEN, PUT_USER, REGISTER_USER} from "../../shared/constants";

export const putUser = (data) => {
    return {
        type: PUT_USER,
        payload: data,
    };
}

export const loginUser = (data) => {
    return {
      type: LOGIN_USER,
      payload: data,
    };
}

export const registerUser = (data) => {
    return {
        type: REGISTER_USER,
        payload: data,
    };
}

export const postToken = (data) => {
    return {
        type: POST_TOKEN,
        payload: data,
    };
}
