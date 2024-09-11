import React from 'react';
import Perfil from './Perfil';

function App() {
  const usuario = {
    nome: 'João',
    email: 'Email Aleatório',
    endereco: 'Endereço Aleatório'
  };

  return (
    <div className="App">
      <Perfil usuario={usuario} />
    </div>
  );
}

export default App;