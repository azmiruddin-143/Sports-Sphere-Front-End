import React from 'react';
import { FaMountain, FaEye, FaHandHoldingHeart, FaBullseye } from "react-icons/fa";
const OurMission = () => {

    const data = [
        {
            id: 1,
            icon: <FaMountain className=" text-5xl  text-[#9dc923]" />,
            title: "Mission",
            description: "To provide top-quality sports equipment that helps athletes achieve their best performance.",
        },
        {
            id: 2,
            icon: <FaEye className=" text-5xl  text-[#9dc923]" />,
            title: "Vision",
            description: "To be a global leader in innovative and sustainable sports solutions.",
        },
        {
            id: 3,
            icon: <FaHandHoldingHeart className=" text-5xl  text-[#9dc923]" />,
            title: "Value",
            description: "We value integrity, innovation, and excellence in every product we deliver.",
        },
        {
            id: 4,
            icon: <FaBullseye className=" text-5xl  text-[#9dc923]" />,
            title: "Goals",
            description: "To empower athletes worldwide by making premium sports gear accessible to all.",
        },
    ];
    return (
        <div className="bg-gray-100 sm:py-24 py-5 px-2 sm:px-4 xl:px-28 2xl:px-36">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission Infographic</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {data.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="mb-4 justify-center flex">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;