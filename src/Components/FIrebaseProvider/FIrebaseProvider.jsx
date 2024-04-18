import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

// google and github provider here
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const FIrebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log('user', user)

    const [loading, setLoading] = useState(true)
    console.log(loading)

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const updateUserProfile = (name, image) => {

       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
        });
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // log out 
    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }


    // observer, setUser, setLoading, cleanUp function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FIrebaseProvider;