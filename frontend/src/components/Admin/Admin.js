import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendAdminAuth } from '../../api/API'
import { useDispatch } from 'react-redux'
import { adminActions } from '../../store'

const Admin = () => {
    const dispatch = useDispatch();
    const onResReceiver = (data) => {
        console.log(data);
        dispatch(adminActions.login());
        localStorage.setItem("adminId", data.id);
        localStorage.setItem("adminToken", data.token)

    }

    const getData = (data) => {
        console.log("admin", data)
        sendAdminAuth(data.inputs)
            .then(onResReceiver)
            .catch((err) => {
                console.log("err", err)
            })
    }
    return (
        <div>
            <AuthForm onSubmit={getData} isAdmin={true} />
        </div>
    )
}

export default Admin



