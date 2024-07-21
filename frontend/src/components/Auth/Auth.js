import React from 'react'
import AuthForm from './AuthForm'
import { sendUserAuth } from '../../api/API'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store'



const Auth = () => {
    const dispatch = useDispatch();

    const onResReceiver = (data) => {
        console.log(data);
        dispatch(userActions.login());
        localStorage.setItem("userId", data.id)

    }
    const getData = (data) => {
        console.log("Auth", data)

        sendUserAuth(data.inputs, data.signup)
            .then(onResReceiver)

            .catch((err) => {
                console.log("err", err)
            })
    }
    return (
        <div>
            <AuthForm onSubmit={getData} isAdmin={false} />
        </div>
    )
}

export default Auth
