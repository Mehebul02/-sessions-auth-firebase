import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase_config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user ,setUSer] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    // Register User 
    const registerUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    // login user 
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out 
    const signOutUser =()=>{
        return signOut(auth)
        
    }
    // google login 
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)

    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUSer(currentUser)
             
            
              // ...
            } 
            return ()=> {
                unSubscribe()
            }
          });
    },[])
    const authInfo ={
        user,
        setUSer,
        registerUser,
        loginUser,
        signOutUser,
        googleLogin

    }
    return (
       <AuthContext.Provider value={authInfo}>
       {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children:PropTypes.node
}