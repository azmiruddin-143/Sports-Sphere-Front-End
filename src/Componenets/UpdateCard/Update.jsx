import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';

const Update = () => {
    const updateLoader = useLoaderData()
    console.log(updateLoader);
    const { _id, image, productName, category, selectedDates, description, price, rating, quantity, note } = updateLoader
    const { user } = useContext(authContext)
    const navigate = useNavigate()
 

    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        console.log(selectedDates); 
        const defaultDateFromDB = updateLoader.selectedDate; 
        if (defaultDateFromDB) {
            const formattedDate = new Date(defaultDateFromDB); 
            setSelectedDate(formattedDate);
        }
    }, [updateLoader]);

    const handleDateChange = (date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
            });
            setSelectedDate(formattedDate); // Directly store Date object
        }
    };

    const addEquipmentForm = (e) => {
        e.preventDefault()
        const from = e.target
        const image = from.image.value
        const productName = from.productname.value
        const category = from.category.value
        const price = from.price.value
        const rating = from.rating.value
        const email = from.email.value
        const userName = from.username.value
        const equipmentObject = { image, productName, category, price, rating, selectedDate, email, userName, }
        console.log(equipmentObject);

        fetch(`http://localhost:5000/myequipment/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipmentObject),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update SuccessFull",
                        text: "Your Equipment has been updated",
                        icon: "success"
                    });
                    navigate("/myEquipmentList")
                }
                
            })


    }
    return (
        <Fade duration={2000} triggerOnce>
             <Helmet>
              <title>Sports Sphere | Update</title>
            </Helmet>
        <div className='my-10 mx-10 '>
            <form onSubmit={addEquipmentForm} className='max-w-4xl mx-auto' action="">
                <div className=' sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='image' defaultValue={image} placeholder="Enter your image url" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> Product Name</span>
                        </label>
                        <input type="text" name='productname' defaultValue={productName} placeholder="Enter your productname" className="input input-bordered" required />


                    </div>
                </div>
                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" defaultValue={category} required>
                            <option disabled selected>
                                Select a Category
                            </option>
                            <option value="Football">Football</option>
                            <option value="Basketball">Basketball</option>
                            <option value="Tennis">Tennis</option>
                            <option value="Cricket">Cricket</option>
                            <option value="Hockey">Hockey</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="Enter your product price" className="input input-bordered" required />
                    </div>
                </div>
                <div className='sm:flex gap-5'>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        {/* <input type="text" name='rating' placeholder="Enter your rating" className="input input-bordered" required /> */}
                        <select name="rating" className="select select-bordered" defaultValue={rating} required>
                            <option disabled selected>
                                Select a rating
                            </option>
                            <option value="1">1</option>
                            <option value="2.5">2.2</option>
                            <option value="3.8">3.8</option>
                            <option value="4">4</option>
                            <option value="4.2">4.2</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Delivery</span>
                        </label>

                        <DatePicker
                            selected={selectedDate}
                            required // Use the Date object from state
                            onChange={handleDateChange} // Update state when a new date is selected
                            dateFormat="MM/dd/yy" // Show date in this format
                            placeholderText="Select Date"
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>

                <div className='sm:flex gap-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} name='email' placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text"
                            name='username' value={user?.displayName} placeholder="Enter your product quantity" className="input input-bordered" required />
                    </div>
                </div>


                <div className='w-full'>
                    <button className='bg-[#baf120] text-black font-bold w-full py-2 px-3 my-5 rounded-lg'>Update Equipment</button>
                </div>
            </form>
        </div>
        </Fade>
    );
};

export default Update;