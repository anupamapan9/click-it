import React, { useState } from 'react';
// import Logo from '../../images/logo.png'
// import heroImg from '../../images/hero.png'
import { CameraIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/solid'

import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex bg-white h-[80px] z-50 justify-around items-center md:px-20'>
            <div className='text-red-500 w-10 h-10 z-50'>
                <Link to='/'> <CameraIcon></CameraIcon></Link>
            </div>

            <div onClick={() => setOpen(!open)} className='md:hidden text-red-500 w-10 h-10 z-50'>
                {
                    open ? <XIcon></XIcon> : <MenuAlt1Icon ></MenuAlt1Icon>
                }
            </div>
            <ul className={`md:flex items-center text-lg duration-500 ease-out absolute md:static md:justify-end py-5  bg-white w-full  ${open ? 'top-20' : 'top-[-300px]'}`}>
                <li className='ml-4  hover:text-red-600'><CustomLink className='pb-1' to='/'>Home</CustomLink></li>
                <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/blog'>Blog</CustomLink></li>
                <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/sign-in'>Sign In</CustomLink></li>
                <li className='ml-4 hover:text-red-600'><CustomLink className='pb-1' to='/about'>About</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Header;

