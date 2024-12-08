import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import { authContext } from '../AuthProvider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const AddEquipment = () => {
    const { user } = useContext(authContext)
    const [selectedDate, setSelectedDate] = useState("");
    const handleDateChange = (date) => {
        if (date) {
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
            });
            setSelectedDate(formattedDate); // Update state with formatted date
        }
    };

   

    const addEquipmentForm = (e) => {
        e.preventDefault()
        const from = e.target
        const image = from.image.value
        const productName = from.productname.value
        const category = from.category.value
        const description = from.description.value
        const price = from.price.value
        const rating = from.rating.value
        const quantity = from.quantity.value
        const email = from.email.value
        const userName = from.username.value
        const note = from.note.value
        const equipmentObject = { image, productName, createdAt: new Date(), category, description, price, rating, selectedDate, quantity, email, userName, note, }
        console.log(equipmentObject);


        if (!image.includes('.png') && !image.includes('.jpg')) {
            toast.error("Enter the correct image URL", {
                autoClose: 3000,
            });
            return;
        }
       
        fetch("http://localhost:5000/sports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(equipmentObject),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Post SuccessFull",
                        text: "Apnar Post Kora Complete oice",
                        icon: "success"
                    });

                    from.reset()
                    setSelectedDate("");
                    from.productname.value = "";
                    from.category.value = "";
                    from.rating.value = "";

                }
            })

    }


    return (
        <Fade duration={2000} triggerOnce>
             <Helmet>
              <title>Sports Sphere | Add Equipment</title>
            </Helmet>

            <div className='my-10 mx-10 '>
                <form onSubmit={addEquipmentForm} className='max-w-4xl mx-auto' action="">
                    <div className=' sm:flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name='image' placeholder="Enter your image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Product Name</span>
                            </label>
                            <input type="text" name='productname' placeholder="Enter your productname" className="input input-bordered" required />

                        </div>
                    </div>
                    <div className='sm:flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="select select-bordered" required>
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
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Enter your description" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className='sm:flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name='price' placeholder="Enter your product price" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            {/* <input type="text" name='rating' placeholder="Enter your rating" className="input input-bordered" required /> */}
                            <select name="rating" className="select select-bordered" required>
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
                    </div>
                    <div className='sm:flex gap-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Delivery</span>
                            </label>
                            {/* <input type="text" name='delivery' placeholder="Enter your delivery time" className="input input-bordered" required /> */}
                            <DatePicker
                                selected={selectedDate}
                                required
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yy" // Show date in this format in UI
                                placeholderText="Select Date"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Enter your product quantity" className="input input-bordered" required />
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

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <textarea
                            placeholder="bat with extra grip, hit paper etc"
                            name='note'
                            rows="5"
                            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className='w-full'>
                        <button className='bg-[#baf120] text-black font-bold w-full py-2 px-3 my-5 rounded-lg'>Add Equipment</button>
                    </div>
                </form>
            </div>

        </Fade>

    );
};

export default AddEquipment;





