import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { Slide } from 'react-awesome-reveal';
const Products = () => {
    const productLoader = useLoaderData()
    console.log(productLoader);
    return (
        <div className='sm:my-16 my-5'>
            <Slide direction="up" duration={2000} triggerOnce>
                <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-items-center sm:gap-y-5 lg:gap-y-12 lg:mx-5 2xl:mx-32 xl:mx-24'>
                    {
                        productLoader.map(product => <SingleProduct key={product._id} product={product} ></SingleProduct>)
                    }
                </div>
            </Slide>

        </div>
    );
};

export default Products;