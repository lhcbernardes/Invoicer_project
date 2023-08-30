import { createContext, useState, useContext, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import AuthContext from '../context/auth';

function Login() {
  const [clientId, setClientId] = useState();
  const [credential, setCredential] = useState();
  const [select_by, setSelect_by] = useState();
  const { setUser, login } = useContext(AuthContext);

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
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex w-full max-w-screen-lg">
        <div className="flex-1 bg-white p-8">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          {/* <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Senha</label>
              <input type="password" id="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Entrar</button>
            </div>
          </form> */}
          {/* <div className="mt-4 text-center">
            <button onClick={handleGoogleLogin} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
              Entrar com o Google
            </button>
          </div> */}
          <GoogleLogin className="flex w-full max-w-screen-lg"
            size="large"
            theme="filled_black"
            width="800px"
            onSuccess={(credentialResponse) => {
              responseGoogle(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
          />
        </div>
        <div className="flex-1 hidden lg:block">
          <img src="/path/to/your/image.jpg" alt="Imagem de fundo" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Login;
