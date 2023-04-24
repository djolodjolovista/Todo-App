import React from 'react';
import './Message.css';
import { useAppSelector } from '../app/hooks';
import { Status } from '../features/todo/todoSlice';

const Message = () => {
  const message = useAppSelector((state) => state.todos.status);
  const messageText = (message: Status) => {
    switch (message) {
      case Status.IDLE:
        return null;
      case Status.LOADING:
        return 'Loading!';
      case Status.SUCCEEDED:
        return '';
      case Status.FAILED:
        return 'Failed!';
      default:
        return '';
    }
  };
  return messageText(message) ? <span className="message">{messageText(message)}</span> : null;
};

export default Message;
