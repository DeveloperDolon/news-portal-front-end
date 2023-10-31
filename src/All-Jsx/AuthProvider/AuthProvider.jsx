import { createContext } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authData = {
        createUser,
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}