import React from 'react';

const Perfil = ({ usuario }) => {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {usuario.nome}</p>
      <p>Email: {usuario.email}</p>
      <p>Endereço: {usuario.endereco}</p>
    </div>
  );
};

export default Perfil;