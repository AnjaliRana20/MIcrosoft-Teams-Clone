import React, { useContext, useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { MicOutlined, VideocamOutlined, MicOffOutlined, VideocamOffOutlined, ScreenShareOutlined } from '@material-ui/icons';
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
    const {toggleVideo, toggleMic, shareScreen } = useContext(SocketContext);
    const classes = useStyles(); 
    const [isMicOn, setIsMicOn] = useState(true);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isScreenShareOn, setIsScreenShareOn] = useState(false);
      
    return (
      <div className={ classes.footer }>
        <center>
          {isMicOn ?(
          <Button style={{backgroundColor: '#000000',  marginRight: '25px', borderRadius: '30%', color: '#FFFFFF', height:'40px', width:'10px', shape: 'circle'}} startIcon={<MicOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', marginRight: '25px',color: '#FFFFFF',borderRadius: '30%', height:'40px', width:'10px'}} startIcon={<MicOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsMicOn(!isMicOn); toggleMic();}}></Button>
          )}
          {'  '}
          {isVideoOn ?(
          <Button style={{backgroundColor: '#000000', marginRight: '25px', color: '#FFFFFF',borderRadius: '30%',  height:'40px', width:'10px', shape: 'circle'}} startIcon={<VideocamOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          ):(
          <Button style={{backgroundColor: '#f44336', marginRight: '25px', borderRadius: '30%', color: '#FFFFFF', height:'40px', width:'10px'}}  startIcon={<VideocamOffOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsVideoOn(!isVideoOn); toggleVideo();}}></Button>
          )}
          {'  '}
          {isScreenShareOn ?(
          <Button style={{backgroundColor: '#696969', marginRight: '25px', color: '#FFFFFF', borderRadius: '30%', height:'40px', width:'10px', shape: 'circle'}} startIcon={<ScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsScreenShareOn(!isScreenShareOn); shareScreen()}} ></Button>
          ):(
          <Button style={{backgroundColor: '#000000', marginRight: '25px', color: '#FFFFFF', textAlign: 'center', borderRadius: '30%', height:'40px', width:'40px', shape: 'circle'}} startIcon={<ScreenShareOutlined style={{fontSize:25, height:'35px', width:'40px'}}/>} onClick={() => {setIsScreenShareOn(!isScreenShareOn); shareScreen()}}></Button>
          )}
        </center>
      </div>
    );
  };
  
  export default Buttons;
