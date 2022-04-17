import React, { useEffect, useState } from 'react';

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
            <h1 className='text-center font-bold text-[#ff0000] text-5xl'>Services</h1>

            <div>
                {services.map(service => console.log(service))}
            </div>
        </div>
    );
};

export default Services;