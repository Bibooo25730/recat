import React from 'react';
import Login from "../index"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import {login} from "../../../actions/login.js"
const LoginView = (props) => {
    const Navigate = useNavigate()
    function onLogin(data) {
        props.login({
            names:data
        })
    }
    return (<Login Navigates={Navigate} onLogin={onLogin}></Login>)
}

export default connect(null,{login})( LoginView) ;