import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import categoriesbanner from "../../assets/categories-banner.png";

const SportsCategory = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/sportsall")
            .then((res) => res.json())
            .then((data) => {
                const uniqueCategories = [...new Map(data.map((item) => [item.category, item])).values()];
                setCategory(uniqueCategories);
            });
    }, []);

    return (
        <div className='lg:mt-28 xl:py-16 py-0  lg:py-10 text-center bg-no-repeat bg-center bg-cover  mt-6 bg-gray-100'
        style={{
            backgroundImage: `url(${categoriesbanner})`, backgroundColor: "#3c448384",
            backgroundBlendMode: "multiply"
        }}
        
        >

            <h1 className='xl:text-4xl lg:text-3xl lg:pt-9  py-5 font-bold sm:text-2xl  text-white px-5 w-fit mx-auto' duration={500} cascade triggerOnce>Shop by Category</h1>
            <div className=" lg:py-10 pb-10 2xl:mx-36 xl:mx-28 mx-4 lg:mx-10 ">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop ={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={4}

                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {category.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div className=" bg-cover flex justify-center items-end  bg-no-repeat bg-center w-full xl:h-[500px] lg:h-[400px] h-[300px] sm:h-[300px] bg-white rounded-lg shadow-lg 2xl:p-4 p-2 text-center"
                                style={{
                                    backgroundImage: `url(${category.image})`,
                                }} >

                                <button
                                    className="bg-lime-500 mb-8  text-white px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105">
                                    {category.category}
                                </button>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SportsCategory;
