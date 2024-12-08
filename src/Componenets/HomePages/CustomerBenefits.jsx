import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaShippingFast, FaBox, FaCreditCard, FaHeadset } from "react-icons/fa";
const CustomerBenefits = () => {
    return (
        <div className="bg-black sm:my-20 my-5 py-12">
            <div className="2xl:mx-32 lg:mx-0 xl:mx-24 lg:px-2 px-4 xl:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 xl:gap-6">
                {/* Row 1 */}
                <Fade duration={2000} triggerOnce>
                    <div className="flex items-center gap-3 text-white ">
                        <div className="bg-lime-500 xl:p-4 p-2 rounded-full">
                            <FaShippingFast size={30} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl sm:text-md xl:text-xl">Ship to Home</h3>
                            <p className="xl:text-md 2xl:w-9/12">Order online and have products shipped to you</p>
                        </div>
                    </div>
                </Fade>


                {/* Row 2 */}
                <Fade duration={3000} triggerOnce>
                    <div className="flex items-center gap-3 text-white ">
                        <div className="bg-lime-500 xl:p-4 p-2 rounded-full">
                            <FaBox size={30} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl sm:text-md xl:text-xl">Free In-Store Pickup</h3>
                            <p className="xl:text-md 2xl:w-9/12">Order online and pick up in store</p>
                        </div>
                    </div>
                </Fade>

                {/* Row 3 */}
                <Fade duration={4000} triggerOnce>
                    <div className="flex items-center  gap-3 text-white ">
                        <div className="bg-lime-500 xl:p-4 p-2 rounded-full">
                            <FaCreditCard size={30} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl sm:text-md xl:text-xl">Credit Offered</h3>
                            <p className="xl:text-md 2xl:w-9/12">Turn big purchases into small payments</p>
                        </div>
                    </div>

                </Fade>

                {/* Row 4 */}
                <Fade duration={5000} triggerOnce>
                    <div className="flex items-center gap-3 text-white ">
                        <div className="bg-lime-500 xl:p-4 p-2 rounded-full">
                            <FaHeadset size={30} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl sm:text-md xl:text-xl">Customer Support</h3>
                            <p className="xl:text-md 2xl:w-9/12">We're here to help you find what you need</p>
                        </div>
                    </div>
                </Fade>


            </div>
        </div>
    );
};

export default CustomerBenefits;