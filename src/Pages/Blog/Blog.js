import React from 'react';

const Blog = () => {
    return (
        <div className='px-5'>
            <h1 className='text-center font-bold text-[#ff0000] text-5xl mb-10'>Blog</h1>
            <div className='py-5'>
                <h2 className='text-gray-700 font-extrabold text-2xl'>1. Difference between authorization and authentication</h2>
                <div className="relative overflow-x-auto shadow-lg sm:rounded-lg my-3">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-slate-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Authorization
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Authentication
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td className="px-6 py-4">
                                    1. Authorization means Create user and give them som extra power to maintain the website.
                                </td>
                                <td className="px-6 py-4">
                                    1. Authentication means create and verify user
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td className="px-6 py-4">
                                    2. Authorization works through settings that are created and maintained by the website owners.
                                </td>
                                <td className="px-6 py-4">
                                    2. Authentication works through passwords, one-time pins, and other information provided or entered by the user. This function help users to change or update their information.
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <td className="px-6 py-4">
                                    3. Authorization do not visible to the user or cannot be change
                                </td>
                                <td className="px-6 py-4">
                                    3. Authentication can be change or modify by the user.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='py-5'>
                <h2 className='text-gray-700 font-extrabold text-2xl'>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-lg'>Firebase is used for authentication to maintain the user login system for the website. It can be done by raw code but it is time consume and not much secure. As firebase is a product of GOOGLE inc. It is much secure and easy to use so I am using firebase
                </p>
                <p> <b>There are many other company to implement authentication or alternative of firebase they are :-
                </b>
                </p>
                <ul className='list-disc px-5 py-2 text-sm'>
                    <li>Okta</li>
                    <li>OneLogin</li>
                    <li>JumpCloud</li>
                    <li>Centrify</li>
                    <li>Auth0</li>
                    <li>Microsoft Azure</li>
                </ul>


            </div>
            <div className='py-5'>
                <h2 className='text-gray-700 font-extrabold text-2xl'>3. What other services does firebase provide other than authentication</h2>
                <p className='text-lg'>
                    Firebase is a authentication solution company. But Beside it they supply many other services:
                </p>
                <ul className='list-disc px-5 py-2 text-sm'>
                    .
                    <li>Cloud Functions.</li>
                    <li>Cloud Firestore</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging</li>
                </ul>
            </div>

        </div>
    );
};

export default Blog;