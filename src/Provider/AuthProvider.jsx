import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
    const signOut =(email,password)=>{
        return signOut(auth,email,password)
        .then(() =>{
            alert('sadxasas')
        })
        .catch(error =>{
            console.log(error)
        })
        
    }
    // google login 
    const googleLogin =()=>{
        return signInWithPopup(auth,googleProvider)

    }
    const authInfo ={
        user,
        setUSer,
        registerUser,
        loginUser,
        signOut,
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