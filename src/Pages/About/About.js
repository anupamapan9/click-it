import React from 'react';

const About = () => {
    return (
        <div className='my-10  md:h-[100vh] px-10'>
            <div className='text-2xl'>
                <div className='grid md:grid-cols-2'>
                    <div className='md:order-1 order-2 '>
                        <p><b>Hello , I am Anupam Mitra </b> <br /> <br />
                            I am studding: English Language And literature in Govt. PC college under National University, Bangladesh.
                            From  my childhood I want to a developer. Now I am very close to it. I want to get a job on a software company as a junior  web developer I always Dedicated myself for achieve my goal.</p>
                        <p className='my-5'>I am very determined to get what i want. I did practice 5-8 hours to clear the concept that Jhankar Mahabub vai taught us. I did all the assignment very carefully and try my best to full fill all the requirement. I never stopped before my jod done. In last 4 months I faced many difficulties but I continue with my learning I will continue my herd work until success.</p>
                    </div>
                    <div className='md:order-2 order-1 md:p-10 pb-10'>
                        <img className='w-full' src="https://i.ibb.co/mHHRR49/my-self-scaled.webp" alt="" />
                    </div>


                </div>

            </div>



        </div >
    );
};

export default About;