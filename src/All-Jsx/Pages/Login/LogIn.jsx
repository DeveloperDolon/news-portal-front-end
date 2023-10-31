import { useEffect } from "react";


const LogIn = () => {

    const imgUrl = "https://img.freepik.com/free-vector/earth-blue-wave-background_1017-36678.jpg?w=900&t=st=1698734955~exp=1698735555~hmac=cc9d82f85524776dd65757ab40521929aedbe2a72935884c0e6eb3bbfabb31c5";
    
    useEffect(() => {
        const theme = localStorage.getItem("mood");
        document.documentElement.setAttribute("data-theme", theme);
    }, [])

    return (
        <div className="px-5">

            <div className="max-w-3xl mx-auto md:mt-36 mt-10">

                <h1 className="md:text-5xl font-bold text-center my-12">Login</h1>

                <form style={{
                    background: `url("${imgUrl}") no-repeat center center, linear-gradient(to right, red, blue)`,
                    backgroundSize: "cover",
                }} className="px-10 py-14 rounded-lg grid grid-cols-1 gap-5">
                    <label htmlFor="email" className="text-lg font-bold">Email
                        <input type="email" required name="email" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Email" />
                    </label>
                    
                    <label htmlFor="password" className="text-lg font-bold">Password
                        <input type="password" required name="password" className="input input-bordered input-success w-full bg-[#03132f9c] text-white md:text-base text-sm font-light mt-3 placeholder-violet-50"  placeholder="Type Password" />
                    </label>
                </form>
            </div>

        </div>
    );
};

export default LogIn;