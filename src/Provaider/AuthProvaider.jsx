import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Fairbase/Fairbase.init";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// gogle provaider
export const googleProvaider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user, loading);
  // update data
  const updateProfileInfo = async ({ displayName, photoURL }) => {
    if (!auth.currentUser) throw new Error("No user logged in!");
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({ ...auth.currentUser });
  };
  // forget password
  const forgetPasswordsend = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // google account
  const createGoogle = (googleProvaider) => {
    return signInWithPopup(auth, googleProvaider);
  };
  // email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    return signOut(auth);
  };
  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update User
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // OnAuth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    createGoogle,
    forgetPasswordsend,
    updateProfileInfo,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvaider;
