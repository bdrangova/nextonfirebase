import { useState, useEffect } from 'react';
import { auth } from '../config/fire';

import Layout from '../components/layout';
import Home from '../components/home';
import Login from '../components/auth/login';

export default () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        localStorage.setItem('user', user.uid);
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });
  }, []);

  return (
    <Layout pathname='/'>
      <div className='text-blue-500 text-4xl text-center'>
        {user ? <Home /> : <Login />}
      </div>
    </Layout>
  );
};
