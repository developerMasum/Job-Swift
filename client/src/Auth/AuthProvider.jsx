import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, updatePassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from './firebase.config';

export const authContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createAuthUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const userUpdatePassword = () => {

        setLoading(true)
        const user = auth.currentUser;
        const newPassword = getASecureRandomPassword();

        return updatePassword(user, newPassword)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log("CurentUser:-", currentUser);

            setLoading(false)
        })
        return () => {
            return unsubscribed;
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createAuthUser,
        logIn,
        logout,
        updateUserProfile,
        googleSignIn,
        resetPassword,
        userUpdatePassword,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;