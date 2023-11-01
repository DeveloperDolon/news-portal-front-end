import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    
    if(user) {
        return children;
    }

    if(loading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return <Navigate to="/"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}