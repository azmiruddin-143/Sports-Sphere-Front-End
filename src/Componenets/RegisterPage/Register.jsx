import React, { useContext, useState } from 'react';
import google from "../../assets/google-icon.png"
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { registerUser, myProfileUpdate, googleRegister, setuser } = useContext(authContext)
    const [show, setHide] = useState(false)
    const navigate = useNavigate()

    const eyeIconHandler = () => {
        setHide(!show)
    }

    const registerForm = (event) => {
        event.preventDefault()
        const trams = event.target.trams.checked
        const name = event.target.name.value
        const photourl = event.target.photourl.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(trams, name, photourl, email, password);
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have an Uppercase letter in the password ", {
                autoClose: 3000,

            });
            return
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have a Lowercase letter in the password  ", {
                autoClose: 3000,

            });
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters", {
                autoClose: 3000,

            });
            return
        }


        if (!trams) {
            toast.error("terms not checked ", {
                autoClose: 3000,

            });
            return
        }

        registerUser(email, password)
            .then((result) => {
                const user = result.user
                setuser(user)
                navigate("/")
                // update Profile//
                myProfileUpdate({ displayName: name, photoURL: photourl })
                    .then(() => {

                        setuser({ ...result.user, displayName: name, photoURL: photourl })

                        toast.success("Registration successful!", {
                            autoClose: 3000,
                        });
                        event.target.reset();
                    })
                    .catch((error) => {
                        toast.error(`Update failed: ${error.message}`, {
                            autoClose: 3000,
                        });
                    })

            })



            .catch((error) => {
                toast.error(`Update failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })


    }

    const googleRegisterHandler = () => {
        googleRegister()
            .then((result) => {
                const user = result.user
                setuser(user)
                toast.success("Registration successful!", {
                    autoClose: 3000,
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }



    return (
        <div>
            <Helmet>
              <title>Sports Sphere | Register</title>
            </Helmet>
            <div className="sm:my-10 my-5 ">
                <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={registerForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photourl</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Enter your photourl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${show ? "text" : "password"}`} name='password' placeholder=" Enter your name password" className="input input-bordered" required />


                                <div onClick={eyeIconHandler}>
                                    {
                                        !show ? <IoEyeOff className='absolute right-6 top-[50px]' size={20} /> :
                                            <IoEye className='absolute right-6 top-[50px]' size={20} />
                                    }

                                </div>
                                <div className="form-control mt-3">
                                    <label className="cursor-pointer justify-start gap-4 label">
                                        <input type="checkbox" name='trams' className="checkbox " />
                                        <span className="label-text">Remember me</span>

                                    </label>
                                </div>


                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#9dc923] hover:bg-[#9dc923] text-white">Register</button>
                            </div>

                            <div className="divider">OR</div>
                            <div onClick={googleRegisterHandler} className='mx-auto flex items-center my-3 gap-3 border py-2 px-4'>
                                <img className='w-[30px]' src={google} alt="" />
                                <h1>Sign in with Google</h1>
                            </div>
                            <h1 className='text-lg text-center'>Already a user ? <Link to="/login" className='text-[#9dc923]'>Login</Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;