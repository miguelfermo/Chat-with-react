import React from 'react';
import { useLocation } from 'react-router-dom';
import Chat from '../components/Chat';

const ChatPage = () => {
  const location = useLocation();
  const { name } = location.state;

  return (
    <div>
      <h1>Olá, {name}! Bem-vindo ao Chat da Pizzaria Rossi</h1>
      <Chat />
    </div>
  );
};

export default ChatPage;
