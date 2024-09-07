import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: photo
          })
    }

    const authInfo = {
        createUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;