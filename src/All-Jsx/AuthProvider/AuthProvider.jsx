import { createContext } from "react";
import PropTypes from "prop-types";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
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
            if(currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        }
    }, [auth])

    const authData = {
        createUser,
        user,
        loading,
        logOut,
        signInWIthEmailPassword,
        setUser
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