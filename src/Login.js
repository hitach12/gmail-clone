import { Button } from '@mui/material';
import React from 'react';
import './Login.css'
import { auth , provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

const Login = () => {
    const dispatch =useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            dispatch(login({
                displayName : user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }))
        }).catch(error => alert(error))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://images.frandroid.com/wp-content/uploads/2021/01/gmail.jpg" alt="" />
                <Button variant="contained" color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    );
};

export default Login;