import React, { useRef } from 'react';
import auth from '../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from './Social';
const Login = () => {
    const email = useRef('');
    const password = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    if (loading || sending) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <p>Loading...</p>
        </div>
    }
    let errors;
    if (error || error1) {
        errors = <p className='text-danger'>Your email or password is incorrect</p>
    }


    if (user) {
        navigate(from, { replace: true });
    }
    const forget = async () => {
        const em = email.current.value;
        await sendPasswordResetEmail(em);

    }
    const login = event => {
        event.preventDefault();
        const em = email.current.value;
        const ps = password.current.value;
        signInWithEmailAndPassword(em, ps)
    }
    return (
        <div>
            <form onSubmit={login} className='mx-auto w-25 shadow-lg rounded p-5 mt-5' >
                <label> Enter Email</label><br /><br />
                <input ref={email} type="email" placeholder='Enter email' /><br /><br />
                <label> Enter Password</label><br /><br />
                <input ref={password} type="password" placeholder='Enter password' /><br /><br />
                {errors}
                <button className='w-100 p-2 rounded-pill'>Log In</button>
            </form>
            <button onClick={forget}><a href="#">Forget Password?</a></button>
            <Link to='/signup'>Sign Up</Link>
            <Social></Social>
        </div>
    );
};

export default Login;