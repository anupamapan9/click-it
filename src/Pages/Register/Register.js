import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className='flex h-[80vh] justify-center items-center'>
            <div className='md:w-[400px]  border-2 shadow-lg shadow-red-500 px-14 py-9'>
                <h1 className='font-extrabold text-2xl'>
                    Register
                </h1>
                <form>
                    <div className='my-10'>
                        <input type="text" name="name" id="" placeholder='Enter Your Name' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' required />
                    </div>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' required />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="password" id="" placeholder='Enter Your Password' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' required />
                    </div>
                    <div className='my-10'>
                        <input type="password" name="confirm password" id="" placeholder='Enter Your Password Again' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' required />
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