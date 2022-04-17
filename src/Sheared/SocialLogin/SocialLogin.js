import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handelFbLogIn = () => {
        console.log('working On it')
    }
    const handelGooglLogIn = () => {
        signInWithGoogle()
    }
    return (
        <section>
            <div className='my-5 flex items-center h-1'>
                <div className='h-1 w-1/2 border-b-[1px]  border-gray-700'></div>
                <p className='px-5'> or</p>
                <div className='h-1 w-1/2 border-b-[1px] border-gray-700 '></div>
            </div>
            <div className='text-left flex justify-center flex-col w-full'>

                <button onClick={handelGooglLogIn} className='border-2 my-1  border-gray-600 transition-all hover:border-[#ff0000] py-2  mx-16'>Login With Google</button>
                <button onClick={handelFbLogIn} className='border-2 border-gray-600 transition-all hover:border-[#ff0000] py-2  mx-16'>Login With Facebook</button>
            </div>
        </section>
    );
};

export default SocialLogin;