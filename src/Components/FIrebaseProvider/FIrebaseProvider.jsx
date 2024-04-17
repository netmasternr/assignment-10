import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

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
    console.log(user)

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // log out 
    const logOut = ()=>{
        setUser(null)
        return signOut(auth)
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FIrebaseProvider;