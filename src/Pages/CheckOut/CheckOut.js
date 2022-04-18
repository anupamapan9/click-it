import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const CheckOut = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const orderPlaced = async (e) => {
        e.preventDefault()
        toast('I will contact you soon');

    }

    return (
        <section className='flex h-[80vh] justify-center items-center'>
            <div className='md:w-[400px]  border-2 shadow-lg shadow-red-500 px-14 py-9'>

                <h1 className='font-extrabold text-2xl'>
                    Order Info
                </h1>
                <form onSubmit={orderPlaced}>

                    <div className='my-10'>
                        <input type="text" name="name" id="" placeholder='Enter Your Name' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' onBlur={(e) => setName(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="email" name="email" id="" placeholder='Enter Your Email' className='border-b-2 border-[#fb5050] transition-all w-full focus:outline-none focus:border-[#ff0000]' onBlur={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="number" name="password" id="" placeholder='Enter Your Phone' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' onBlur={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className='my-10'>
                        <input type="text" name="address" id="" placeholder='Enter Address' className='border-b-2 border-[#fb5050] focus:outline-none w-full transition-all focus:border-[#ff0000]' onBlur={(e) => setAddress(e.target.value)} required />
                    </div>
                    <ToastContainer />
                    <div className='my-5'>
                        <input type="submit" value="Place Order" className='bg-[#fb5050] transition-all text-white font-semibold hover:bg-[#ff0000]  w-full py-2 cursor-pointer ' />
                    </div>
                </form>

            </div>

        </section>
    );
};

export default CheckOut;