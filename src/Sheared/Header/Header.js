import React, { useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const logout = () => {
        signOut(auth);
    };
    return (
        <nav className='flex bg-white h-[80px] z-20 justify-around items-center md:px-20'>
            <div className='text-red-500 w-24 md:w-36  z-50'>
                <Link to='/'><img src="https://i.ibb.co/c8BkRxN/logo-removebg-preview-1.png" alt="" /> </Link>
            </div>

            <div onClick={() => setOpen(!open)} className='md:hidden text-red-500 w-10 h-10 z-50'>
                {
                    open ? <XIcon></XIcon> : <MenuAlt1Icon ></MenuAlt1Icon>
                }
            </div>
            <ul className={`md:flex items-center text-lg z-50 duration-500 ease-out absolute md:static md:justify-end py-5  bg-white w-full  ${open ? 'top-20' : 'top-[-300px]'}`}>
                <li className='ml-4  hover:text-red-600'><CustomLink className='pb-1' to='/'>Home</CustomLink></li>
                <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/blogs'>Blogs</CustomLink></li>

                <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/about'>About</CustomLink></li>
                {!user ?
                    <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/log-in'>Log In</CustomLink></li> :
                    <li className='ml-4 px-3 hover:bg-[#ff2121] text-white bg-[#ff0000]'><button className='pb-1' onClick={logout}>Log out</button></li>}
            </ul>
        </nav>
    );
};

export default Header;

