import React, {Fragment, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import {postToken} from "../../redux/actions/actions";

export const ActivatePage = () => {
    const dispatch = useDispatch()
    const {token} = useParams();

    useEffect(() => {
        dispatch(postToken(token));
    }, [dispatch, token])

    return (
        <Fragment>
            <h1>Вы успешно прошли регистрацию</h1>
        </Fragment>
    )
}
