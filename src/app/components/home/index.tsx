import { auth } from '../../config/fire';

const Home = () => {
  const logout = () => {
    auth().signOut();
  };

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
