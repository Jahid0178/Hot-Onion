import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (password.length < 6) {
      setError("Password should be at least 6 characters or long");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // observe user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  // sign out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  return {
    user,
    error,
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
    logOut,
  };
};

export default useFirebase;
