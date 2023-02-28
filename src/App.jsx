import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import { auth } from './firebase';

function App() {
  // const auth = getAuth();
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setIsSignIn(true);
    });

    return () => unsubscribe();
  }, []);

  const signIn = () => {
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log('ERROR');
          console.log(error);
        });
    }
  };

  return (
    <div>
      {auth.currentUser ? <Home /> : <button onClick={signIn}>Login</button>}
    </div>
  );
}

export default App;