import React from 'react';
import { useLocation } from 'react-router-dom';
import Chat from '../components/Chat';

const ChatPage = () => {
  const location = useLocation();
  const { name } = location.state;

  return (
    <div>
      <Chat nome={name}/>
    </div>
  );
};

export default ChatPage;
