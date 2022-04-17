import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { AiFillStar } from 'react-icons/ai';
const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='bg-gray-200 py-10 px-12'>
            <h1 className='text-center font-bold text-[#ff0000] text-5xl py-5 '>Testimonial</h1>
            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

            >

                <div className='bg-white shadow-md  md:h-[250px] shadow-gray-700 mx-2 md:mx-0  my-5 p-5 md:w-[300px]'>
                    <p>Awesome Photo PhotoGrapher Know his job. Super responsive always recommended. Best of Luck</p>
                    <div className='flex items-end justify-between mt-3'>
                        <div className='w-[70px] h-[70px] hover:bg-[#ff0000] bg-slate-900 rounded-full'>
                            <img className='rounded-full w-16' src="https://i.ibb.co/TvsY3pX/pexels-andrea-piacquadio-733872-1.jpg" alt='' />
                        </div>
                        <div>
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /> <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /><AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <h3 className='font-extrabold text-xl text-slate-900]'>Cathleen</h3>
                        </div>
                    </div>

                </div>
                <div className='bg-white shadow-md  md:h-[250px] shadow-gray-700 mx-2 md:mx-0  my-5 p-5 md:w-[300px]'>
                    <p>A curvy boudoir client was so worried about looking overweight in her images but she cries with delight when she sees how beautifully you have captured her figure</p>
                    <div className='flex items-end justify-between mt-3'>
                        <div className='w-[70px] h-[70px] hover:bg-[#ff0000] bg-slate-900 rounded-full'>
                            <img className='rounded-full w-16' src="https://i.ibb.co/TvsY3pX/pexels-andrea-piacquadio-733872-1.jpg" alt='' />
                        </div>
                        <div>
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /> <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /><AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <h3 className='font-extrabold text-xl text-slate-900]'>Rosalinda</h3>
                        </div>
                    </div>

                </div>
                <div className='bg-white shadow-md  md:h-[250px] shadow-gray-700 mx-2 md:mx-0  my-5 p-5 md:w-[300px]'>
                    <p>You meet one of your past clients on the street and she tells you that everyone who visits her home gushes over the wall gallery you created for her and how it’s the best thing she’s ever bought for her home.</p>
                    <div className='flex items-end justify-between mt-3'>
                        <div className='w-[70px] h-[70px] hover:bg-[#ff0000] bg-slate-900 rounded-full'>
                            <img className='rounded-full w-16' src="https://i.ibb.co/TvsY3pX/pexels-andrea-piacquadio-733872-1.jpg" alt='' />
                        </div>
                        <div>
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /> <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /><AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <h3 className='font-extrabold text-xl text-slate-900]'>Baroka</h3>
                        </div>
                    </div>

                </div>
                <div className='bg-white shadow-md  md:h-[250px] shadow-gray-700 mx-2 md:mx-0  my-5 p-5 md:w-[300px]'>
                    <p>We had a great experience from start to finish. Everything from the first email, to the relaxed photo shoot to the delivery of our gorgeous products. First class!</p>
                    <div className='flex items-end justify-between mt-3'>
                        <div className='w-[70px] h-[70px] hover:bg-[#ff0000] bg-slate-900 rounded-full'>
                            <img className='rounded-full w-16' src="https://i.ibb.co/TvsY3pX/pexels-andrea-piacquadio-733872-1.jpg" alt='' />
                        </div>
                        <div>
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /> <AiFillStar className='inline text-[#ffd52b] md:text-2xl' /><AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <AiFillStar className='inline text-[#ffd52b] md:text-2xl' />
                            <h3 className='font-extrabold text-xl text-slate-900]'>Jenny</h3>
                        </div>
                    </div>

                </div>
            </Carousel>
        </div>

    );
};

export default Testimonial;