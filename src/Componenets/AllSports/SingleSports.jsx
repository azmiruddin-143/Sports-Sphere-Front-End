import React from 'react';
import { Link } from 'react-router-dom';

const SingleSports = ({ sports, index }) => {
    const { _id, image, productName, category, description, price, rating, selectedDate, quantity, note } = sports
    return (

        <tbody>
            <tr>
                <th className='flex justify-center items-center gap-5'>{index + 1}
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image} />
                        </div>
                    </div>
                </th>
               
                <td>{productName}</td>
                <td>{category} </td>
                <td> ${price}</td>
                <td>{selectedDate}</td>
                <td className=''>
                    <Link to={`/details/${_id}`} ><button className='bg-[#baf120] text-sm py-2 px-5 rounded-md text-black'>View Details</button> </Link>
                </td>
            </tr>
        </tbody>

    );
};

export default SingleSports;