import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails && roomDetails.name);
  console.log('MESSAGES >>', roomMessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails && roomDetails.name} </strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <InfoOutlinedIcon /> Details
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput
        channelName={roomDetails && roomDetails.name}
        channelId={roomId}
      />
    </div>
  );
}

export default Chat;
