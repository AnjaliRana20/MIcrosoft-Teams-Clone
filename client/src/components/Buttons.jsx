import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MicOutlined, VideocamOutlined, MicOffOutlined, VideocamOffOutlined,StopScreenShareOutlined, ScreenShareOutlined } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  footer: { 
    backgroundColor: '	#303030',
    
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
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isScreenShareOn, setIsScreenShareOn] = useState(false);
      
    return (
      <div className={ classes.footer }>
        <center>
          {isMicOn ?(
          <Button style={{backgroundColor: '#000000', bottom:'3px', marginRight: '20px', borderRadius: '60%', color: '#FFFFFF', height:'40px', width:'10px', shape: 'circle'}} startIcon={<MicOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336',bottom:'3px', marginRight: '20px',color: '#FFFFFF',borderRadius: '60%', height:'40px', width:'10px'}} startIcon={<MicOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          )}
          {'  '}
          {isVideoOn ?(
          <Button style={{backgroundColor: '#000000', bottom:'3px', marginRight: '20px', color: '#FFFFFF',borderRadius: '60%',  height:'40px', width:'10px', shape: 'circle'}} startIcon={<VideocamOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', bottom:'3px', marginRight: '20px', borderRadius: '60%', color: '#FFFFFF', height:'40px', width:'10px'}}  startIcon={<VideocamOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          )}
          {'  '}
          {isScreenShareOn ?(
          <Button style={{backgroundColor: '#696969',bottom:'3px',  marginRight: '20px', color: '#FFFFFF', borderRadius: '60%', height:'40px', width:'10px', shape: 'circle'}} startIcon={<StopScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {shareScreenOff();setIsScreenShareOn(!isScreenShareOn)}} ></Button>
          ):(
          <Button style={{backgroundColor: '#000000',bottom:'3px', marginRight: '20px', color: '#FFFFFF', textAlign: 'center', borderRadius: '60%', height:'40px', width:'40px'}} startIcon={<ScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {shareScreenOn();setIsScreenShareOn(!isScreenShareOn)}}></Button>
          )}
        </center>
      </div>
    );
  };
  
  export default Buttons;
