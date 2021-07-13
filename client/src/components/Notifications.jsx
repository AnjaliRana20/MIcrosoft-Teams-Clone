import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';
import { Call, CallEnd } from '@material-ui/icons';

const Notifications = () => {
  const { answerCall, call, callAccepted, declineCall } = useContext(SocketContext);

  return (
    <>
    {/* If call is not accepted and user is receiving call */}
      {call.isReceivingCall && !callAccepted && (
        <div style={{ 
          position:'absolute',
          
          left: '40%',
          top: '0px',
          bottom: '10px',
          width: '310px',
          height: '80px',
          textAlign: 'center', 
          borderRadius: '20px',
          backgroundColor: '#000000',
          border: '3px solid black',
          }}>
          {/* Show the notification if someone calls, where call.name is name of the caller */}
          <h1 style={{color: '#FFFFFF'}}>{call.name} is calling:</h1>
          {/* Button for pickup */}
          <Button 
          style={{backgroundColor: '#008000', borderRadius: '30%', marginTop:'5px', marginRight: '20px', color: '#FFFFFF', border: '3px solid black'}} 
          variant="contained"  
          onClick={answerCall}
          startIcon={<Call fontSize="40px" />}
          >
          </Button>
          {/* Button for Hangup */}
          <Button 
          style={{backgroundColor: '#ff0000', borderRadius: '30%', marginTop:'5px', marginLeft: '5px', color: '#FFFFFF', border: '3px solid black'}} 
          variant="contained"  
          onClick={declineCall}
          startIcon={<CallEnd fontSize="40px" />}
          >
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;