import React from 'react';
import ReactStars from 'react-stars';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleEquipment = ({ equipment,onDelete }) => {
    const { _id, image, productName, category, description, price, rating, selectedDate, quantity, note } = equipment

   
    return (
        <div>
            <div class="p-4">
                <div class="max-w-sm  border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                    {/* <!-- Badge --> */}
                    <div class="relative">
                        <div class="absolute top-2 left-2 bg-[white] text-[#020202] text-xs font-semibold py-1 px-2 rounded-full">
                            {category}
                        </div>
                        <img className='w-[400px] h-64 object-cover rounded-md'
                            src={image}
                        />
                    </div>

                    {/* <!-- Content --> */}
                    <div class="p-4">
                        <h2 class="text-lg font-bold text-gray-800">
                            {productName}
                        </h2>
                        <p class="text-sm text-gray-600 mb-3">{selectedDate}</p>
                        <div class="text-sm flex items-center gap-1 text-gray-600 mb-3">
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

                            <p className='mt-[5px]'>({rating})</p>
                        </div>
                        <div class="text-lg font-semibold text-gray-800 mb-4">${price}</div>

                        {/* <!-- Buttons --> */}
                        <div class="flex items-center justify-between">
                            <Link to={`/update/${_id}`} ><button class="px-4 py-2 flex items-center gap-3 text-gray-600 border border-gray-400 rounded-md hover:bg-gray-100">
                                Update
                                <FaEdit size={20} />
                            </button></Link>
                            <button onClick={()=>onDelete(_id)} class="px-4 py-2 flex items-center gap-3 bg-[#baf120] text-black font-semibold rounded-md">
                                Dilet <FaTrashAlt size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SingleEquipment;