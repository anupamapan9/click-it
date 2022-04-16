import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handelCreateUser = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <section className='flex h-[80vh] justify-center items-center'>
            <div className='md:w-[400px]  border-2 shadow-lg shadow-red-500 px-14 py-9'>
                <h1 className='font-extrabold text-2xl'>
                    Register
                </h1>
                <form onSubmit={handelCreateUser}>
                    <div className='my-10'>
                        <input type="text" name="name" id="" placeholder='Enter Your Name' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' onBlur={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' onBlur={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="password" id="" placeholder='Enter Your Password' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' onBlur={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="confirm password" id="" placeholder='Enter Your Password Again' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' onBlur={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div className='my-5'>
                        <input type="submit" value="Register" className='bg-[#fb5050] transition-all hover:bg-[#ff0000]  w-full py-2 cursor-pointer  ' />
                    </div>
                </form>
                <p>Have an Account? <Link className='border-b-2 border-[#fb5050] hover:text-[#ff0000]' to='/log-in'>Login</Link></p>
            </div>

        </section>
    );
};

export default Register;