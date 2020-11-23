import React, {Fragment} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/actions/actions";

export const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => dispatch(loginUser(data))

    return (
        <Fragment>
            <h1>Аутентификация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" className="form-control" name='username' id="text" aria-describedby="emailHelp" ref={register}/>
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" className="form-control" name='password' id="password" ref={register}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}
