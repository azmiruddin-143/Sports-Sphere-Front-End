import React from 'react';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Sports Sphere | Error</title>
            </Helmet>
            <div>
                <h1 className='text-red-700 text-xl  sm:text-2xl md:text-4xl'>404 Not found page</h1>
            </div>
        </div>
    );
};

export default Error;