import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'atendente', message: 'Seja Bem-Vindo ao atendimento online da Pizzaria Rossi, pode me chamar de Anna!' },
    { sender: 'atendente', message: 'Qual sabor e tamanho de pizza que você gostaria de pedir?' }
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: 'me', message }]);
  };
  

  return (
    <div className="chat_de_fato">
      <div className="chat-title">Atendimento Pizzaria Rossi</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} sender={msg.sender} message={msg.message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
