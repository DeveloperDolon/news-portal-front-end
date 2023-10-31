import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Marquee from "react-fast-marquee";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-red-500 text-white">
                <div  className="max-w-7xl mx-auto lg:px-0 px-5 py-3 flex gap-3">

                    <h1 className="md:text-xl text-base font-bold whitespace-nowrap">Breaking News : </h1>

                    <Marquee speed={30} className="font-semibold text-lg">Breading News : Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatem hic repudiandae ipsam alias esse sunt officiis ut deleniti. Nostrum neque ratione nihil enim non numquam aut velit quasi error?</Marquee>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>            

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;