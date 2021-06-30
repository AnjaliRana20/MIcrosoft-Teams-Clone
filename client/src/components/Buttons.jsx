import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Mic, Videocam, MicOff, VideocamOff, PhoneDisabled, Phone, ScreenShare } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';
import { TextField} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  titleItemRight: { 
      position: 'fixed',
      width: '80%',
      alignItems: 'right',
      margin: 'auto auto',
      backgroundColor: '#r',
    },
  }));
  
  const Buttons = () => {
    const { callAccepted, callEnded, leaveCall, toggleVideo, toggleMic, callUser, shareScreen } = useContext(SocketContext);
    const classes = useStyles();
    const [idToCall, setIdToCall] = useState('');
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
      
    return (
      <div className={ classes.titleItemRight }>
        <center>
          {isMicOn ?(
          <Button style={{backgroundColor: '#000000', color: '#FFFFFF'}} startIcon={<Mic style={{fontSize:30}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', color: '#FFFFFF'}} startIcon={<MicOff style={{fontSize:30}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          )}
          {'  '}
          {isVideoOn ?(
          <Button style={{backgroundColor: '#000000', color: '#FFFFFF'}} startIcon={<Videocam style={{fontSize:30}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', color: '#FFFFFF'}} startIcon={<VideocamOff style={{fontSize:30}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          )}
          {'  '}
          <Button style={{backgroundColor: '#000000', color: '#FFFFFF'}} startIcon={<ScreenShare style={{fontSize:30}}/>} id="startButton" disabled ></Button>
          <script src="./ScreenShare.jsx"></script>
          <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}  />
          {!callEnded && callAccepted ? (
            <Button  variant="contained" style={{backgroundColor: '#f44336', color: '#FFFFFF'}} startIcon={<PhoneDisabled style={{fontSize:30}} />} onClick={leaveCall} ></Button>
          ):(
            <Button  variant="contained" style={{backgroundColor: '#12824C', color: '#FFFFFF'}} startIcon={<Phone style={{fontSize:30}} />} onClick={() =>  {callUser(idToCall);}} ></Button>
          )}    
          <button onClick={shareScreen}>Share screen</button>   
        </center>
      </div>
    );
  };
  
  export default Buttons;