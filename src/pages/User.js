import React, {useContext} from 'react';
import { State } from '../context/stateContext';


const User = () => {
  const { name, picture, address, email } = useContext(State);
  const user = {
    nome: name,
    email: email,
    cidade: address,
    foto: picture
    // Adicione mais informações conforme necessário
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Perfil do Usuário</h1>
        <div>
          <p className="text-lg">Nome: {user.nome}</p>
          <p className="text-lg">Email: {user.email}</p>
          {/* <p className="text-lg">Idade: {user.idade}</p> */}
          <p className="text-lg">Cidade: {user.cidade}</p>
          {/* Adicione mais campos aqui */}
        </div>
      </div>
    </div>
  );
};

export default User;