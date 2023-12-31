import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Config/Firebase/firebase.config";
import PropTypes from 'prop-types';
import UsePublicServer from "../Hooks/usePublicSever";

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const publicServer = UsePublicServer();

    const userCreate = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image,
        })
    }

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // Get Token and store in server 
                const userInfo = {email: currentUser.email};
                publicServer.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('user-token',res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('user-token');
            }
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    }, [publicServer])

    const userInfo = {
        loading,
        user,
        userCreate,
        updateUserProfile,
        googleLogIn,
        logIn,
        logOut,
    }
    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;