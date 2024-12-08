import React from 'react';
import TennisbatBaner from "../../assets/sibgle-tannis-2.png"
import singletannis from "../../assets/single-tannis-personjpg.jpg"
import singlefootball from "../../assets/single-football.jpg"
import singleBasketball from "../../assets/single-Basketball-person.jpg"
import { Slide } from 'react-awesome-reveal';


const PerformanceHub = () => {
    return (

        <Slide direction="up" duration={2000} triggerOnce>
              <div className='lg:mx-3 xl:my-28 xl:mx-24 2xl:mx-32'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
                {/* Card 1 */}
                <div className="relative hidden sm:flex sm:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={TennisbatBaner}
                        alt="Tennis"
                        className="w-full h-96 object-cover"
                    />

                    <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-lg">
                        <p className="text-lg font-bold">Elevate Your Run with Our Premium Accessories</p>
                        <button className="mt-4 bg-[#9dc923] text-white px-4 py-2 rounded ">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={singleBasketball}
                        alt="Tennis 2"
                        className="w-full h-96 object-cover"
                    />

                </div>

                {/* Card 3 */}
                <div className="relative  bg-[#9dc923] rounded-lg p-4 shadow-lg overflow-hidden">
                    <div>
                        <h1 className='xl:text-5xl block lg:text-4xl text-xl sm:text-3xl 2xl:w-10/12 text-white font-semibold py-5'>Performance Precision Sport Essentials</h1>

                        <button className="bg-[white] my-2 text-black px-4 py-2 rounded">
                            Shop Now
                        </button>
                    </div>

                </div>

                {/* Card 4 */}
                <div className="relative bg-black rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={singlefootball}
                        className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-32 left-16 bg-[#00000055] px-4 py-2 rounded-lg">
                        <p className="text-lg font-bold text-white">SwiftStrike Styles High-Performance</p>
                        <button className="mt-4 bg-[#9dc923] text-white px-4 py-2 rounded hover:bg-lime-600">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Card 5*/}
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        src={singletannis}
                        alt="Tennis 2"
                        className="w-full h-96 object-cover"
                    />

                </div>

            </div>
        </div>
        </Slide>

    );
};

export default PerformanceHub;