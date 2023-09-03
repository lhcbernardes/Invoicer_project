import React from 'react';

const User = () => {
  // Simulando informações do usuário
  const user = {
    nome: 'João da Silva',
    email: 'joao.silva@example.com',
    idade: 30,
    cidade: 'São Paulo',
    // Adicione mais informações conforme necessário
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Perfil do Usuário</h1>
        <div>
          <p className="text-lg">Nome: {user.nome}</p>
          <p className="text-lg">Email: {user.email}</p>
          <p className="text-lg">Idade: {user.idade}</p>
          <p className="text-lg">Cidade: {user.cidade}</p>
          {/* Adicione mais campos aqui */}
        </div>
      </div>
    </div>
  );
};

export default User;