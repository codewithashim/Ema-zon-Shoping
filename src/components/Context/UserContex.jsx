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
  const [loading, setLoading] = useState(true);
  // --------------------- All function ---------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // --------------------- All function ---------------------F
  const authInfo = { user,loading,setUser, createUser, signIn, logOut, };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default UserContex;
