import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import SocialLogin from '../../Sheared/SocialLogin/SocialLogin';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [forgotten, setForgotten] = useState(false)
    const [ForgotEmail, setForgotEmail] = useState(false)
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    // user sign in ----------------------
    const handelSingIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    // navigate user --------------------
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }

    // forgotten password email added----------------
    const resetPassword = () => {
        sendPasswordResetEmail(ForgotEmail);
        toast('Reset Password Send');
    }
    return (
        <section className='flex h-[100vh] mx-5 justify-center items-center'>
            <div className='md:w-[400px]  border-2 shadow-lg shadow-red-500 px-14 py-9'>
                <h1 className='font-extrabold text-2xl'>
                    Login
                </h1>
                <form onSubmit={handelSingIn}>
                    <p className='text-[#ff0000]'>{error?.message}</p>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' required onBlur={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="password" id="" placeholder='Enter Your Password' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#6f4949]' required onBlur={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <input type="submit" value="Login" className='bg-[#fb5050] transition-all hover:bg-[#ff0000]  w-full py-2 cursor-pointer  ' />
                    </div>
                    <ToastContainer />
                </form>
                <p className='mb-2'>New Here? <Link className='border-b-2 border-[#fb5050]  hover:text-[#ff0000]' to='/register'>Register Now</Link></p>

                <p>Forgotten Password? <button className='border-b-2 border-[#fb5050] hover:text-[#ff0000]' onClick={() => setForgotten(!forgotten)}>Send Reset</button></p>
                {forgotten ? <div>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Reset Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' required onBlur={(e) => setForgotEmail(e.target.value)} />
                        <button className='bg-[#ff0000] mt-2 text-white px-2' onClick={resetPassword}>Send Email</button>
                    </div>
                </div> : <></>}
                <SocialLogin></SocialLogin>
            </div>

        </section>
    );
};

export default LogIn;