import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home.jsx';

function App() {
  const auth = getAuth();

  useEffect(() => {
    if (!auth.currentUser) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log("ERROR")
        console.log(error);
      });
    }
  }, [])

  return (
    <div>
      {auth.currentUser && <Home />}
    </div>
  );
}

export default App;





