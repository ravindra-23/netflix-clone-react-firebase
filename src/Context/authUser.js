import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
          })
          return unsubscribe
    },[])
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        {!loading && children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}