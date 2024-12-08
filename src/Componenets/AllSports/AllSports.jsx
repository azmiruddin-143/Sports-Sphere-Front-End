
import { useLoaderData } from 'react-router-dom';
import SingleSports from './SingleSports';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const AllSports = () => {
    const allproductLoader = useLoaderData()
    const [sortedProducts, setSortedProducts] = useState(allproductLoader);
    const [isSorted,setisSorted] = useState(false)
    const handleSort = () => {
        fetch("http://localhost:5000/sportSort")
            .then(res => res.json())
            .then(data => setSortedProducts(data)) 
            setisSorted(true)
    };

    const handleDefault = () =>{
        setSortedProducts(allproductLoader)
        setisSorted(false)
    }
    
    return (
        <Fade duration={2000} triggerOnce>
             <Helmet>
              <title>Sports Sphere | All Equipment</title>
            </Helmet>
            <div className='my-10'>
      
                {
                    !isSorted ? <div className='flex mx-auto my-4 justify-center'>
                        <button onClick={handleSort} className='bg-[#baf120] py-2 px-6 rounded-md'>Sort all price</button>
                    </div> :
                        <div className='flex mx-auto my-4 justify-center'>
                            <button onClick={handleDefault} className='bg-[#baf120] py-2 px-6 rounded-md'>Default Price</button>
                        </div>

                }


                <div className=" overflow-x-auto max-w-6xl mx-auto">
                    <table className="table">
                        <thead>
                            <tr className='text-lg text-black'>
                                <th></th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        {
                            sortedProducts.map((sports, index) =>
                                <SingleSports sports={sports} index={index}></SingleSports>
                            )
                        }
                    </table>
                </div>

            </div>
        </Fade>
    );
};

export default AllSports;