
import { useLoaderData } from 'react-router-dom';
import SingleSports from './SingleSports';
import { Fade, Slide } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';


const AllSports = () => {
    const allproductLoader = useLoaderData()
    const [sortedProducts, setSortedProducts] = useState(allproductLoader);
    const [isSorted, setisSorted] = useState(false)
    const handleSort = () => {
        fetch("https://server-sports.vercel.app/sportSort")
            .then(res => res.json())
            .then(data => setSortedProducts(data))
        setisSorted(true)
    };

    const handleDefault = () => {
        setSortedProducts(allproductLoader)
        setisSorted(false)
    }

    return (
        <Fade duration={2000} triggerOnce>
            <Helmet>
                <title>Sports Sphere | All Equipment</title>
            </Helmet>
            <div className='my-10'>

                <div className='flex items-center justify-around'>
                    <h1 className='2xl:text-4xl sm:text-3xl text-2xl  border-b border-[#baf120] rounded-xl p-2'>Products ({sortedProducts.length})</h1>

                    {
                        !isSorted ? <div className=' my-4 '>
                            <button onClick={handleSort} className='bg-[#baf120] py-2 px-6 rounded-md'>Sort all price</button>
                        </div> :
                            <div className='my-4 '>
                                <button onClick={handleDefault} className='bg-[#baf120] py-2 px-6 rounded-md'>Default Price</button>
                            </div>

                    }
                </div>




                <div className='sm:my-16 my-5'>
                    <Slide direction="up" duration={2000} triggerOnce>
                        <div className='grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-items-center sm:gap-y-5 lg:gap-y-12 lg:mx-5 2xl:mx-32 xl:mx-24'>
                            {
                                sortedProducts.map(sports => <SingleSports key={sports._id} sports={sports} ></SingleSports>)
                            }
                        </div>

                    </Slide>
                </div>

            </div>
        </Fade >
    );
};

export default AllSports;