import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='py-10 bg-gray-700 pl-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white'>
                <div>
                    <h2 className='text-2xl font-extrabold mb-6'>PhotoGrapher</h2>
                    <q>When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.</q>
                </div>
                <div>
                    <h2 className='text-2xl font-extrabold mb-6'>Newsletter</h2>
                    <input type="email" name="email" placeholder='Enter' className='focus:outline-none' /> <button className='ml-2 bg-[#ff0000] px-2 '>Subscribe</button>
                </div>
                <div>
                    <h2 className='text-2xl font-extrabold mb-6'>Contact Info</h2>
                    <p><LocationMarkerIcon className='w-4 h-4 inline' /> Bagerhat, Bangladesh</p>
                    <p><PhoneIcon className='w-4 h-4 inline' /> +88123556785</p>

                </div>
                <div>
                    <h1 className='text-2xl font-extrabold mb-6'>Follow Me</h1>
                    <a href="https://www.facebook.com/" ><AiFillFacebook className='inline text-4xl text-white hover:text-[#ff0000] transition-all' /> </a>
                    <a href="https://www.twitter.com/" ><AiFillTwitterSquare className='inline text-4xl text-white hover:text-[#ff0000] transition-all' /> </a>
                    <a href="https://www.facebook.com/" ><AiFillInstagram className='inline text-4xl text-white hover:text-[#ff0000] transition-all' /> </a>
                    <a href="https://www.facebook.com/"><AiFillLinkedin className='inline text-4xl text-white hover:text-[#ff0000] transition-all' /> </a>
                </div>
            </div>
            <p className='text-white text-center pt-5'>All Copyright Reserve &copy; {year}</p>
        </footer >
    );
};

export default Footer;