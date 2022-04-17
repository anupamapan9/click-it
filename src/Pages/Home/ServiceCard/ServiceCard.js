import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, name, description, price } = service
    return (
        <div className='border-2 relative h-[550px] md:h-[500px] shadow-md shadow-slate-400'>
            <div className='flex relative'>
                <div className='w-full h-full absolute '>
                    <span className='text-white font-bold text-lg z-20 bg-[#ff0000] p-2 m-5 inline-block'>$ {price}</span>
                </div>
                <img src={img} alt="" />
            </div>
            <h1 className='mt-3 font-bold text-center text-xl'> {name}</h1>
            <p className='mt-3 font-normal text-center text-lg'> {description}</p>
            <Link to='/checkout' className='bg-[#ff0000] absolute bottom-0 inline-block py-2 font-semibold text-white w-full text-center hover:bg-[#900808] transition-all'>CheckOut</Link>
        </div>
    );
};

export default ServiceCard;