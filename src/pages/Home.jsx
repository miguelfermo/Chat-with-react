import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      navigate('/chat', { state: { name } });
    }
  };

  return (
    <div>
      <h1>Bem-vindo à Pizzaria Rossi</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Digite seu nome"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Home;
