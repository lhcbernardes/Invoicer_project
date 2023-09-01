import { useState, useContext, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '../context/auth';

function Login() {
  const [clientId, setClientId] = useState();
  const [ , setCredential] = useState();
  const [ , setSelect_by] = useState();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (hasUser) {
      login(hasUser);
    }
  }, [clientId, login]);

  const responseGoogle = (response) => {
    const { clientId, credential, select_by } = response;
    setClientId(clientId);
    setCredential(credential);
    setSelect_by(select_by);
    login(clientId);
    localStorage.setItem("user", clientId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="bg-gray-800 text-white rounded-lg p-8 shadow-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold mb-4">Login</h2>
          <p className="text-lg mb-4">Bem-vindo! Faça o login para acessar sua conta.</p>
          <GoogleLogin className="flex w-full max-w-screen-lg"
            size="large"
            theme="filled_black"
            onSuccess={(credentialResponse) => {
              responseGoogle(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </div>
        <div className="md:text-center">
          <img
            src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Imagem Legal"
            className="w-full max-h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
