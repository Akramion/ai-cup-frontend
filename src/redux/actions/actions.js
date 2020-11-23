export const PUT_USER = 'PUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const putUser = (data) => {
    return {
        type: PUT_USER,
        payload: data,
    };
}

export  const loginUser = (data) => {
    return {
      type: LOGIN_USER,
      payload: data,
    };
}

export  const registerUser = (data) => {
    return {
        type: REGISTER_USER,
        payload: data,
    };
}
