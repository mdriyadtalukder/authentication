import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithMicrosoft, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithMicrosoft, user2, loading2, error2] = useSignInWithMicrosoft(auth);
    const [signInWithYahoo, user3, loading3, error3] = useSignInWithYahoo(auth);
    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);


    return (
        <div>
            <button onClick={() => { signInWithGoogle() }}>google</button>
            <button onClick={() => { signInWithFacebook() }}>facebook</button>
            <button onClick={() => { signInWithMicrosoft() }}>Microsoft</button>
            <button onClick={() => { signInWithYahoo() }}>yahoo</button>
            <button onClick={() => { signInWithGithub() }}>github</button>
        </div>
    );
};

export default Social;