import React, { useState } from 'react';
import db from './firebase';
import firebase from 'firebase/compat/app';
import './ChatInput.css';
import { useStateValue } from './StateProvider';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault(); //doesnt refresh the page

    if (channelId) {
      db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        });
    }
    setInput(() => '');
  };
  return (
    <div className="chatInput">
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName && channelName.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
