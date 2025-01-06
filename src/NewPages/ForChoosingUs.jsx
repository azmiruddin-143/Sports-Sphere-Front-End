import { FaSnowflake, FaUserTie, FaMoneyBillWave, FaBuilding, FaTruck, FaPhoneAlt } from "react-icons/fa";
import aboutUs1 from '../../src/assets/abooutUs-1.jpg'
const ForChoosingUs = () => {
    const reasons = [
        {
            icon: <FaSnowflake />,
            title: "Fast Processing",
            description: "We ensure quick order processing to save your valuable time."
        },
        {
            icon: <FaUserTie />,
            title: "Customer Consultation",
            description: "Our experts are available to guide you in choosing the right equipment."
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Affordable Pricing",
            description: "We offer competitive prices without compromising on quality."
        },
        {
            icon: <FaBuilding />,
            title: "Trusted by Thousands",
            description: "Join our growing community of satisfied customers worldwide."
        },
        {
            icon: <FaTruck />,
            title: "Timely Delivery",
            description: "Get your orders delivered promptly, every time."
        },
        {
            icon: <FaPhoneAlt />,
            title: "24/7 Customer Support",
            description: "Our support team is available round the clock to assist you."
        },
    ];
    return (
        <div className="lg:flex gap-10 2xl:mx-36 xl:mx-28 sm:mx-4 mx-2  rounded-lg sm:my-14 my-5">
            {/* Left Section */}
            <div className="w-full  lg:w-1/3 flex justify-center mb-6 md:mb-0">
                <img
                    src={aboutUs1}
                    alt="Profile"
                    className="rounded-lg w-full  object-cover"
                />
            </div>

            {/* Right Section */}
            <div className="w-full lg:md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4 lg:mt-0 mb-4">Reason for Choosing Us</h2>
                <p className="text-gray-600 mb-6">
                    We strive to provide top-quality products and services to meet your needs
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg hover:shadow-md transition"
                        >
                            <div className="text-[#9dc923] text-3xl">{reason.icon}</div>
                            <div>
                                <h3 className="font-bold text-lg">{reason.title}</h3>
                                <p className="text-gray-500 text-sm">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ForChoosingUs;
