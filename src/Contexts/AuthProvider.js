import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //* create an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //* login an user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    //* sign out
    const userSignOut = () => {
        return signOut(auth)
    };

    //* Update a user's profile
    const updateUserProfile = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    };

    //* Send a password reset email
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    //* get currently sign-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //* sign in with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        updateUserProfile,
        signInWithGoogle,
        forgotPassword,
        userSignOut,
        createUser,
        userLogin,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;