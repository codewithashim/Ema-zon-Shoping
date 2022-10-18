import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
export const AuthContex = createContext();
const auth = getAuth(app);

const UserContex = ({ children }) => {
  // const user = { email: "codewithashim" };
  const [user, setUser] = useState(null);
  // --------------------- All function ---------------------
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    return signOut(auth);
  };
  // --------------------- All function ---------------------F
  const authInfo = { user, setUser, createUser, signIn, logOut };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
