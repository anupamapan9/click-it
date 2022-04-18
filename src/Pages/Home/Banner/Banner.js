import React from 'react';
const Banner = () => {
    return (
        <div className='flex items-center h-[90vh] relative bg-[url(https://i.ibb.co/rsMKqR4/banner.jpg)] md:bg-cover md:bg-center bg-cover'>
            <div className=' z-20 md:px-9'>
                <h4 className=' text-white font-bold text-2xl'>Hi. I am a photographer</h4>
                <h1 className='text-white font-black text-7xl my-5'>I capture <span className='text-[#ff0000]'> Emotions </span> </h1>
                <button className='text-white my-5 bg-[#ff0000] hover:bg-[#ffffff00] border-2 transition-all border-[#ff0000] py-2 px-10'>Blog</button>
            </div>
            <div className='absolute opacity-70 bg-black w-full h-full z-10'>
            </div>

        </div>
    );
};

export default Banner;