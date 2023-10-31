import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            <div>
                hello world
            </div>            

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;