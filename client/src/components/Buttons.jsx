import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Mic, Videocam, MicOff, VideocamOff, ScreenShare } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  footer: { 
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    },
  }));
  
  const Buttons = () => {
    const {toggleVideo, toggleMic, shareScreen } = useContext(SocketContext);
    const classes = useStyles(); 
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
      
    return (
      <div className={ classes.footer }>
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
          <Button style={{backgroundColor: '#000000', color: '#FFFFFF'}} startIcon={<ScreenShare style={{fontSize:30}}/>} onClick={shareScreen} ></Button>
        </center>
      </div>
    );
  };
  
  export default Buttons;