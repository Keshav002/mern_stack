import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from '../App';

function Logout() {

    const {dispatch}=  useContext(UserContext);

    //promices
    const history = useHistory();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER", payload:false});

            history.replace('/login');
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        })
    })
    return (
        <>
            <h1>Logout Successfully</h1>
        </>
    )
}

export default Logout
