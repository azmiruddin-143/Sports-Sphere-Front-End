import React, { useRef } from 'react';
import Marquee from "react-fast-marquee";
import { FaBolt } from 'react-icons/fa';

const TextSlider = () => {
    const marqueeRef = useRef();

    return (
        <Marquee
        pauseOnHover={true}
        >
            <h1 className='flex items-center gap-2 2xl:text-2xl text-sm md:text-md lg:text-lg bg-[black] text-white sm:p-2 p-1 xl:py-4'>
                Flat 25% OFF on All Football Gear! Shop Now! <FaBolt color='#9dc923' /> 
                Free Shipping on Orders Over $3000! Shop Tennis Gear Now! <FaBolt color='#9dc923'/> 
                Get Game-Ready! Buy 1 Basketball and Get 1 Free! <FaBolt color='#9dc923'/>  
                Fast Delivery on All Orders – Order Now! <FaBolt color='#9dc923'/>  
                Slam Dunk Deals! 30% OFF on All Basketball Gear – Shop Now! <FaBolt color='#9dc923'/>  
                Limited Stock on Tennis Balls – Buy More, Save More <FaBolt color='#9dc923'/>
            </h1>
        </Marquee>
    );
};

export default TextSlider;
