import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='my-10'>
            <h1 className='text-center font-bold text-[#ff0000] text-5xl mb-10'>Services</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {services.map(service => <ServiceCard service={service} key={service.id}> </ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;