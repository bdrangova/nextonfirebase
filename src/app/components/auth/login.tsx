import { auth } from '../../config/fire';

const Login = () => {
  const login = async (e: any) => {
    e.preventDefault();
    const provider = new auth.GoogleAuthProvider();
    const credential = auth().signInWithPopup(provider);
    console.log(credential);
  };

  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
