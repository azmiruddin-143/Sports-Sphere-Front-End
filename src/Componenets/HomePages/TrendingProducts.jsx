import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
const TrendingProducts = () => {
  const [category, setCategory] = useState([])
  console.log(category);
  useEffect(() => {
    fetch('http://localhost:5000/sportsall')
      .then(res => res.json())
      .then(data => {
        setCategory(data)
      })
  }, [])
  return (
    <Slide direction="up" duration={2000} triggerOnce>
      <div className='md:my-28 text-center  my-14 bg-gray-100'>

        <Fade className='xl:text-4xl lg:text-3xl sm:text-2xl relative -top-7 text-white bg-[#9dc923] py-2 px-5 w-fit mx-auto' duration={500} cascade triggerOnce>Top Trending</Fade>
        <div className=" lg:py-20 pb-10 2xl:mx-36 xl:mx-28 mx-4 lg:mx-10 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
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
            {category.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="h-[450px] bg-white rounded-lg shadow-lg 2xl:p-4 p-2 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 rounded-md object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.productName}</h3>
                  <p className="text-[#9dc923] font-bold">${product.price}</p>
                  <Link to={`/details/${product._id}`} ><button className='text-white bg-[#9dc923] my-3 py-2 px-5'>View Details</button></Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Slide>

  );
};

export default TrendingProducts;