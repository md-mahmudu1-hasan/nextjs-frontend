'use client'
import React, { useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.init";


const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user);
    setLoading(false);
  });
  return () => unsubscribe();
}, [])
  
const SignOut = () => {
  setLoading(true);
  return signOut(auth);
}

const updateUserProfile = (displayName , photoURL , currentUser) => {
  setLoading(true);
  return updateProfile(currentUser , {
    displayName,
    photoURL
  })
}

const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
}

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

  
  const authinfo = {
    createUser,
    signIn,
    user,
    SignOut,
    loading,
    updateUserProfile,
    resetPassword,
    googleSignIn,
    setLoading,
    setUser,
  };
  return (
    <div>
      <AuthContext value={authinfo}>{children}</AuthContext>
    </div>
  );
};

export default Authprovider;
