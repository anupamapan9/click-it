import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handelSingIn = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    console.log(user)
    console.log(error?.message)
    return (
        <section className='flex h-[80vh] justify-center items-center'>
            <div className='md:w-[400px]  border-2 shadow-lg shadow-red-500 px-14 py-9'>
                <h1 className='font-extrabold text-2xl'>
                    Login
                </h1>
                <form onSubmit={handelSingIn}>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' required onBlur={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="password" id="" placeholder='Enter Your Password' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' required onBlur={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='my-5'>
                        <input type="submit" value="Login" className='bg-[#fb5050] transition-all hover:bg-[#ff0000]  w-full py-2 cursor-pointer  ' />
                    </div>
                </form>
                <p>New Here? <Link className='border-b-2 border-[#fb5050] hover:text-[#ff0000]' to='/register'>Register Now</Link></p>
            </div>

        </section>
    );
};

export default LogIn;