import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Social from './component/Social';
import auth from './firebase.init';

const Signup = () => {
    const fn = useRef('');
    const ln = useRef('');
    const lk = useRef('');
    const em = useRef('');
    const pw = useRef('');
    const  navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    if (loading || updating) {
        return <div className='d-flex justify-content-center align-items-center mt-5'>
            <p>Loading...</p>
        </div>
    }
    let errors;
    if (error || error1) {
        errors = <p className='text-danger'>Your email or password is incorrect</p>
    }
    if (user) {
        navigate('/');
    }
    const signup = async (event) => {
        event.preventDefault();
        const email = em.current.value;
        const password = pw.current.value;
        const fnam = fn.current.value;
        const lnam = ln.current.value;
        const link = lk.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: fnam + ' ' + lnam, photoURL: link });

    }
    console.log(user);

    return (
        <div>
            <form onSubmit={signup} className='mx-auto w-25 shadow-lg rounded p-5 mt-5' >
                <label> First Name</label><br /><br />
                <input type="text" ref={fn} placeholder='First Name' /><br /><br />
                <label> Last Name</label><br /><br />
                <input type="text" ref={ln} placeholder='Last Name' /><br /><br />
                <label>Link</label><br /><br />
                <input type="text" ref={lk} placeholder='Enter Link' /><br /><br />
                <label> Enter Email</label><br /><br />
                <input type="email" ref={em} placeholder='Enter email' /><br /><br />
                <label> Enter Password</label><br /><br />
                <input type="password" ref={pw} placeholder='Enter password' /><br /><br />
                {errors}
                <button className='w-100 p-2 rounded-pill'>Sign Up</button>
            </form>

            <Link to='/login'>Log In</Link>
            <Social></Social>
        </div>
    );
};

export default Signup;