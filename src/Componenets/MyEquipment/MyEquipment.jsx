import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import SingleEquipment from './SingleEquipment';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
const MyEquipment = () => {
    const { user } = useContext(authContext)

    const [equipment, setEquipment] = useState([]);


    const userEmail = user.email

    useEffect(() => {
        const fetchEquipment = async () => {
            try {
                const response = await fetch(
                    `https://server-sports.vercel.app/myequipment?email=${userEmail}`
                );
                const data = await response.json();
                setEquipment(data);
            } catch (error) {
                console.error("Error fetching equipment:", error);
            }
        };

        fetchEquipment();
    }, [userEmail]);



    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9dc923",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://server-sports.vercel.app/myequipment/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }

                        const remainingEquipments = equipment.filter(
                            (equipment) => equipment._id !== id
                        );
                        setEquipment(remainingEquipments);

                    })

            }
        });

    }



    return (
        <Fade duration={2000} triggerOnce>
            <Helmet>
                <title>Sports Sphere | My Equipment</title>
            </Helmet>
            <div>

                {
                    equipment.length === 0 ?

                        <div className="flex justify-center my-5">
                            <div>
                                <h1 className='text-4xl py-3'>No Data Found ?</h1>
                                <Link to={'/addequipment'} > <button className='py-2 my-3 px-6 bg-[#9dc923] rounded-md'>Add Equipment</button> </Link>
                            </div>
                        </div>

                        :
                        // <div className='max-w-7xl sm:grid-cols-2 my-12 mx-auto grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 place-items-center'>
                        //     {
                        //         equipment.map(equipment => <SingleEquipment key={equipment._id} onDelete={handleDelete} equipment={equipment} ></SingleEquipment>)
                        //     }
                        // </div>

                        <div className=" overflow-x-auto max-w-6xl mx-auto">
                            <table className="table">
                                <thead>
                                    <tr className='text-lg text-black'>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Update</th>
                                        <th>Dilet</th>

                                    </tr>
                                </thead>
                                {
                                    equipment.map((equipment, index) =>
                                        <SingleEquipment equipment={equipment} handleDelete ={handleDelete} index={index}></SingleEquipment>
                                    )
                                }
                            </table>
                        </div>

                }


            </div>
        </Fade>
    );
};

export default MyEquipment;