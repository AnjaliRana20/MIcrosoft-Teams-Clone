/*This file contains buttons of Mute on/off, Video on/off and ScreenShare On/off*/

import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MicOutlined, VideocamOutlined, MicOffOutlined, VideocamOffOutlined,StopScreenShareOutlined, ScreenShareOutlined } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles(() => ({
  footer: { 
    backgroundColor: '#333333',    
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "",
    bottom: "0",
    height: "33px",
    width: "100%",
  },
  footer1: { 
    float: "left",
    left: "",     
  },
}));


  const Buttons = props => {
    const {toggleVideo, toggleMic,shareScreenOn, shareScreenOff  } = useContext(SocketContext);
    const classes = useStyles(); 
    // To Check state of Mic
    const [isMicOn, setIsMicOn] = useState(true); 
    // To check state of Video 
    const [isVideoOn, setIsVideoOn] = useState(true);
    // Check State of Screen Share
    const [isScreenShareOn, setIsScreenShareOn] = useState(false);
      
    return (
      <div className={ classes.footer }>
        <center>
          {/* If Mic is on then show Red button with Mic off icon else black button with Mic on icon */}
          {isMicOn ?(
            <Button style={{backgroundColor: '#000000', bottom:'3px', marginRight: '20px', borderRadius: '60%', color: '#FFFFFF', height:'40px', width:'10px'}} 
            startIcon={<MicOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>}
            onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}>
            </Button>
          ):(
            <Button style={{backgroundColor: '#f44336',bottom:'3px', marginRight: '20px',color: '#FFFFFF',borderRadius: '60%', height:'40px', width:'10px'}} 
            startIcon={<MicOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} 
            onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}>
            </Button>
          )}
          
          {'  '}
          {/* If Video is on then show Red button with Cam off icon else black button with Cam on icon */}
          {isVideoOn ?(
            <Button style={{backgroundColor: '#000000', bottom:'3px', marginRight: '20px', color: '#FFFFFF',borderRadius: '60%',  height:'40px', width:'10px'}} 
            startIcon={<VideocamOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} 
            onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}>
            </Button>
          ):(
            <Button style={{backgroundColor: '#f44336', bottom:'3px', marginRight: '20px', borderRadius: '60%', color: '#FFFFFF', height:'40px', width:'10px'}}  
            startIcon={<VideocamOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} 
            onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}>
            </Button>
          )}
          {'  '}
          {/* If ScreenShare is on then show Red button with Screen Share off icon else black button with Screen Share on icon */}
          {isScreenShareOn ?(
            <Button style={{backgroundColor: '#696969',bottom:'3px',  marginRight: '20px', color: '#FFFFFF', borderRadius: '60%', height:'40px', width:'10px'}} 
            startIcon={<StopScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} 
            onClick={() => {shareScreenOff();setIsScreenShareOn(!isScreenShareOn)}} >
            </Button>
          ):(
            <Button style={{backgroundColor: '#000000',bottom:'3px', marginRight: '20px', color: '#FFFFFF', borderRadius: '60%', height:'40px', width:'40px'}} 
            startIcon={<ScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} 
            onClick={() => {shareScreenOn();setIsScreenShareOn(!isScreenShareOn)}}>
            </Button>
          )}
        </center>
      </div>
    );
  };
  
  export default Buttons;
