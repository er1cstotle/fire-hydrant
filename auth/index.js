import { useState, useEffect } from 'react';

export const useAuthState = (auth) => {
  const [user, setUser] = useState(auth.currentUser)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  
  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
        setUser(user)
        setLoading(false)
      }, (error) => {
        setError(error)
        setLoading(false)
      }
    );

    return listener
  }, [auth]);

  return [user, loading, error];
};