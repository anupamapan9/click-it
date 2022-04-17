import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
        </section>
    );
};

export default Home;