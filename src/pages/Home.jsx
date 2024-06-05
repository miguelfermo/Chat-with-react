import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

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
    <>
      <div className='box'>
        <div className="pizza"></div>
        <div className="faixa"></div>
        <p className="ppizza"><strong>Venha conhecer o <br/> sabor da melhor <br/> pizza da cidade!</strong></p>
        <div className="left">
          <h1 className='h1'>BEM-VINDO À <br></br>PIZZARIA ROSSI</h1>
          <p className="p">Para começar seu atendimento, digite o seu nome:</p>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Digite seu nome..."
            />
            <button type="submit" className="button">Pedir</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
