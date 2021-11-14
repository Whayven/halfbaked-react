import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser, registerUser } from "../../redux/reducers/UserReducer";

const SignUp = (props) => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.user.loggedIn);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const register = () => {
        dispatch(registerUser(email, name, password))
    };

    const login = () => {
        dispatch(loginUser(email, password))
    };

    if (loggedIn) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div>
            <div>
                <label>Email: </label>
                <input
                    value={email}
                    type="text"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />{" "}
                <label>Name: </label>
                <input
                    value={name}
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />{" "}
                <label>Password: </label>
                <input
                    value={password}
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br />
                <button onClick={login}>Login</button> <button onClick={register}>Register</button>
            </div>
        </div>
    );
}


export default SignUp
