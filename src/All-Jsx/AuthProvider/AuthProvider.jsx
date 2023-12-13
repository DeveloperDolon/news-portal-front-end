import { createContext } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const mainUrl = "https://planet-news-server.vercel.app";
    const mainUrl = "http://localhost:5000";
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWIthEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user, ", currentUser);
            if(currentUser) {
                const loggedUser = currentUser?.email || user?.email;
                const user = {email: loggedUser};

                setUser(currentUser);
                
                axios.post(`${mainUrl}/jwt`, user , {withCredentials: true})
                .then((res) => console.log("token Response " ,res.data))
                .catch(err => console.log("This is the error",err.message))
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
        createUser,
        user,
        loading,
        logOut,
        signInWIthEmailPassword,
        setUser,
        mainUrl
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