import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <section className="flex h-[105vh] bg-cover relative z-50 items-center bg-gradient-to-tr from-purple-800 to-[#ff0000bf] -mt-24 -mb-[500px]">
            <img src="https://wallpaperaccess.com/full/2359441.jpg" alt="" className='w-full h-full absolute object-cover mix-blend-overlay' />
            <div className='md:pl-48 text-white z-50'>
                <h1 className='heading font-bold text-[150px] heading'>404!!!</h1>
                <p className='text-3xl mb-9 '>
                    Page you Are searching Not Found </p>
                <Link to='/' className='text-center border-2 border-orange-300 font-bold  py-2 px-10 hover:bg-gradient-to-tr from-purple-800 to-orange-600 transition-all inline-block '>Back To Home</Link>
            </div>
        </section>
    );
};

export default NotFound;