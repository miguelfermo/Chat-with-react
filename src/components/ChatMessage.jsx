import React from 'react';

const ChatMessage = ({ sender, message }) => {
  const isUser = sender === 'me';
  return (
    <div className={`message ${isUser ? 'me' : 'atendente'}`}>
      <span>{isUser ? 'Você diz:' : 'Atendente diz:'}</span>
      <div className={isUser ? 'my-message' : 'atendente-message'}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
