import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MicOutlined, VideocamOutlined, MicOffOutlined, VideocamOffOutlined, ScreenShareOutlined } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';
import { PhoneOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  footer: { 
    backgroundColor: "#000000",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "",
    bottom: "0",
    height: "40px",
    width: "100%",
    },
    footer1: { 
      float: "left",
      left: "",
     
      },
  }));


  const Buttons = props => {
    const {toggleVideo, toggleMic, shareScreen } = useContext(SocketContext);
    const classes = useStyles(); 
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
      
    return (
      <div className={ classes.footer }>
        <center>
          {isMicOn ?(
          <Button style={{backgroundColor: '#696969', color: '#FFFFFF'}} startIcon={<MicOutlined style={{fontSize:25}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', color: '#FFFFFF'}} startIcon={<MicOffOutlined style={{fontSize:25}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          )}
          {'00'}
          {isVideoOn ?(
          <Button style={{backgroundColor: '#696969', color: '#FFFFFF'}} startIcon={<VideocamOutlined style={{fontSize:25}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', color: '#FFFFFF'}}  startIcon={<VideocamOffOutlined style={{fontSize:25}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          )}
          {'00'}
          <Button style={{backgroundColor: '#696969', color: '#FFFFFF'}} startIcon={<ScreenShareOutlined style={{fontSize:25}}/>} onClick={shareScreen} ></Button>
        </center>
      </div>
    );
  };
  
  export default Buttons;
