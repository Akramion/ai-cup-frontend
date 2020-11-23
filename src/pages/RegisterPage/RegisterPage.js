import React, {Fragment} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/actions/actions";
import {useForm} from "react-hook-form";

export const RegisterPage = () => {


    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (data) => dispatch(registerUser(data))

    return (
        <Fragment>
            <h1>Регистрация</h1>

            <form>
                <div className="form-group">
                    <label>Имя пользователя</label>
                    <input type="text" className="form-control" name='username' id="text" aria-describedby="emailHelp" ref={register}/>
                </div>
                <div className="form-group">
                    <label>Электронная почта</label>
                    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" ref={register}/>
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" className="form-control" name='password' id="password" ref={register}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </Fragment>
    )
}

