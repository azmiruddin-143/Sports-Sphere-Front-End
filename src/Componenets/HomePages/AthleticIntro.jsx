import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai"; 
import { BsCheckCircleFill } from "react-icons/bs"; 
import heroimage from "../../assets/hero-image.jpg"
import { Slide } from 'react-awesome-reveal';
const AthleticIntro = () => {
  return (
    <Slide direction="up" duration={2000} triggerOnce>
      <section className="flex flex-col md:flex-row md:justify-between px-6 lg:px-12 py-12  xl:mx-16 2xl:mx-24">
        {/* Left Side: Image with Play Button */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={heroimage}
            className="rounded-xl object-cover w-full max-w-4xl"
          />
          {/* Play Button */}
          <button
            className="absolute bg-lime-500 text-white p-4 rounded-full shadow-md transform hover:scale-110 transition-all duration-300"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <AiFillPlayCircle className="w-8 h-8" />
          </button>
        </div>

        {/* Right Side: Content */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 sm:text-center md:text-left">
          <h1 className="lg:text-4xl text-2xl  dark:text-red-600 leading-normal xl:text-6xl 2xl:w-8/12 font-bold  ">
            Elevate Your Sports, Gear Up with Passion
          </h1>

          <p className="dark:text-white  text-lg lg:w-10/12 mt-4">
            Driven by the belief that the right gear can elevate performance, our
            mission is to empower athletes to reach new heights in their
            respective sports.
          </p>
          <ul className="mt-6 space-y-4">

            <li className="flex items-center dark:text-white ">
              <BsCheckCircleFill className="text-lime-500 w-8 h-8 mr-3" />
              Extensive Product Range
            </li>

            <li className="flex items-center dark:text-white">
              <BsCheckCircleFill className="text-lime-500 w-8 h-8 mr-3" />
              Size and Fit Assistance
            </li>
            <li className="flex items-center dark:text-white">
              <BsCheckCircleFill className="text-lime-500 w-8 h-8 mr-3" />
              Hassle-Free Returns and Exchanges
            </li>
          </ul>
        </div>
      </section>
    </Slide>

  );
};

export default AthleticIntro;