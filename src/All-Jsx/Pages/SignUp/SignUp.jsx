
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import {updateProfile} from "firebase/auth"
import { AuthContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);

    const {createUser} = useContext(AuthContext);

    const imgUrl = "https://img.freepik.com/free-vector/earth-blue-wave-background_1017-36678.jpg?w=900&t=st=1698734955~exp=1698735555~hmac=cc9d82f85524776dd65757ab40521929aedbe2a72935884c0e6eb3bbfabb31c5";
    
    useEffect(() => {
        const theme = localStorage.getItem("mood");
        document.documentElement.setAttribute("data-theme", theme);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo?.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 8 characters!!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }

        createUser(email, password)
        .then(res => {
            updateProfile(res.user, {
                displayName: name,
                photoURL: photoUrl
            }).then(() => {
                Swal.fire(
                    'Good job!',
                    'Sign Up Compleat!',
                    'success'
                )
            }).catch(err => console.log(err));
        })
        .catch(err => console.log(err))

        
    }

    return (
        <div className="px-5">
            <div
            style={{
                background: `url("${imgUrl}") no-repeat center center, linear-gradient(to right, red, blue)`,
                backgroundSize: "cover",
            }}
            className="max-w-3xl mx-auto md:mt-36 mt-10 mb-28 rounded-xl">
                <Link to="/" className="btn">Go to Home</Link>
                <h1 className="md:text-5xl text-3xl font-bold text-center my-12 pt-5">Register</h1>

                <form onSubmit={handleLogin} className="px-10 py-14 pb-10 rounded-lg grid grid-cols-1 gap-5">
                    <label htmlFor="name" className="text-lg font-bold">Name
                        <input type="text" required name="name" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Name" />
                    </label>
                    
                    <label htmlFor="photo" className="text-lg font-bold">Photo Url
                        <input type="text" required name="photo" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Photo Url" />
                    </label>
                    
                    <label htmlFor="email" className="text-lg font-bold">Email
                        <input type="email" required name="email" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Email" />
                    </label>
                    
                    <label htmlFor="password" className="text-lg font-bold relative">Password
                        <input type={showPassword ? "text" : "password"} required name="password" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Password" />

                        <span onClick={() => setShowPassword(!showPassword)} className="absolute text-white right-3 bottom-[15%] text-2xl cursor-pointer">
                            {
                                showPassword ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                            }
                        </span>
                    </label>

                    <input className="w-full bg-sky-400 py-3 rounded-lg mt-5 md:text-lg text-base font-medium cursor-pointer" type="submit" value="Submit" />
                </form> 

                <div>
                    <p className="text-white px-10 py-6">Already have an account? <Link to="/login" className="font-bold text-green-500">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default SignUp;