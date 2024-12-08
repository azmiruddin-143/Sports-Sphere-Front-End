import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const SingleProduct = ({ product }) => {
    const { _id, image, productName, category, description, price, rating, selectedDate, quantity, note } = product

    const discountPrice = parseInt(price) + 200;
    return (
        <div class="max-w-md p-4">
            <div class="bg-white rounded-lg p-2 shadow-lg overflow-hidden">
                {/* <!-- Discount Badge --> */}
                <div class="relative">
                    <div class="absolute top-2 left-2 bg-[#9dc923] text-black text-xs font-semibold py-1 px-2 rounded-full">
                        Latest
                    </div>
                </div>

                {/* <!-- Product Image --> */}
                <img class="w-[400px] h-64 object-cover rounded-md" src={image} alt="Chek Trouser" />

                {/* <!-- Product Info --> */}
                <div class="p-2">
                    {/* <h2 class="text-lg font-semibold text-gray-800">{productName}</h2> */}
                    <Fade duration={500} cascade triggerOnce class="text-lg font-semibold text-gray-800">{productName}</Fade>
                    <p class="text-sm text-gray-600">{category}</p>

                    {/* <!-- Price Section --> */}
                    <div class="flex items-center mt-2">
                        <span class="text-xl font-bold text-gray-900"> $ {price}</span>
                        <span class="ml-2 text-sm line-through text-gray-500">{discountPrice}</span>
                    </div>

                    {/* <!-- Rating --> */}
                    <div class="flex items-center mt-2">
                        <span class="text-sm text-gray-600">
                            {
                                rating && <ReactStars
                                    count={5}
                                    value={rating || 5}
                                    size={24}
                                    activeColor="#ffd700"
                                    edit={false}
                                    color2="#e09d15"
                                    color1='gray'
                                />

                            }
                        </span>
                    </div>

                    {/* <!-- Order Button --> */}
                    <Link to={`/details/${_id}`} > <button class="mt-4 w-full py-2 px-4 bg-[#9dc923] text-[black] font-semibold rounded-md">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;