import React from 'react';
import './Message.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const Message = () => {
  const message = useSelector((state: RootState) => state.message);
  return message ? <span className="message">{message}</span> : null;
};

export default Message;
