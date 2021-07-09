import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ 
          position:'absolute',
  left: '40%',
  top: '0px',
  bottom: '10px',
  width: '300px',
  height: '80px',
  textAlign: 'center', 
  backgroundColor: '#000000',
  border: '3px solid black',
  }}>
          <h1 style={{color: '#FFFFFF'}}>{call.name} is calling:</h1>
          <Button style={{backgroundColor: '#008000', color: '#FFFFFF', border: '3px solid black'}}  variant="contained"  onClick={answerCall}>
            PICK UP
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;