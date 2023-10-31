import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";


const LogIn = () => {

    const [showPassword, setShowPassword] = useState(false);

    const imgUrl = "https://img.freepik.com/free-vector/earth-blue-wave-background_1017-36678.jpg?w=900&t=st=1698734955~exp=1698735555~hmac=cc9d82f85524776dd65757ab40521929aedbe2a72935884c0e6eb3bbfabb31c5";
    
    useEffect(() => {
        const theme = localStorage.getItem("mood");
        document.documentElement.setAttribute("data-theme", theme);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const info = {email, password};
        
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
                <h1 className="md:text-5xl text-3xl font-bold text-center my-12 pt-5">Login</h1>

                <form onSubmit={handleLogin} className="px-10 py-14 pb-10 rounded-lg grid grid-cols-1 gap-5">
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
                    <p className="text-white px-10 py-6">Don&apos;t have an account? <Link to="/register" className="font-bold text-green-500">Register</Link></p>
                </div>
            </div>

        </div>
    );
};

export default LogIn;