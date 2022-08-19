import React from 'react';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <img src={userImage}></img>
      <div className="message__info">
        <h4>
          {user}{' '}
          <span className="message__time">
            {new Date(timestamp && timestamp.toDate()).toUTCString()}{' '}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
