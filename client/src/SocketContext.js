
// This file links backend to frontend

import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = createContext();

//const socket = io('http://localhost:5000');
const socket = io('https://microsoft-teams-clone-anjali.herokuapp.com/');

const ContextProvider = ({ children }) => {

  // Defining all the variables
  var [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [uname, setUname] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const [screenSwitch, setScreenSwitch] = useState();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
    
    socket.on('me', (id) => setMe(id));
    
    // callUser is emmited in callUser function and is made on here 
    socket.on('callUser', ({ from, name: callerName, uname:userName, signal }) => {
      setCall({ isReceivingCall: true, from, name:callerName, uname:userName, signal });
    });

    // callEnded is emmited in callEnded function and is made on here     
    socket.on("callEnded", ()=>{
      window.localStorage.removeItem("state");
      setCallEnded(true);
      window.location.reload();
    });
    
  }, []);
  
  // answerCall when the call is set in callUser 
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    // Send signal to the id of caller
    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    // Set the user's video
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  
  // Take input as id entered in Options
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    // emit callUser parameters
    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name, uname});
      
    });

    // Set caller video
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    // After user receives call, setCallAccepted true
    // setCall
    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);
      setCall({to: uname});
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  
  // After pressing hangup button, emit callEnded function and 
  // reload screen at both ends
  const leaveCall = () => {
    window.localStorage.removeItem("state");
    socket.emit("callEnded");
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  
  const declineCall = () => {
    window.location.reload();
  }

  let micSwitch = true;
  let videoSwitch = true;

  // Video On/Off function
  function toggleVideo(){
    if(stream != null && !screenSwitch && stream.getVideoTracks().length > 0){
      videoSwitch = !videoSwitch;
      stream.getVideoTracks()[0].enabled = videoSwitch;
    }
  }
  
  // Mic On/Off function
  function toggleMic(){
    if(stream != null && !screenSwitch &&stream.getAudioTracks().length > 0){
      micSwitch = !micSwitch;
  
      stream.getAudioTracks()[0].enabled = micSwitch;
    }  
  }

  // ScreenShare On/Off function
  function shareScreenOn() {
    navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(stream => {
      const screenTrack = stream.getTracks()[0];
      stream.current = screenTrack;
      myVideo.current.srcObject = stream;
      setStream(stream);
      // Switch screen between my video and shared screen
      setScreenSwitch(true);
    })
  }

  function shareScreenOff() {
    stream.getTracks().forEach(track => track.stop());
    // If video is not off
    if(videoSwitch){
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        const screenTrack = stream.getVideoTracks()[0];
        stream.current = screenTrack;
        myVideo.current.srcObject = stream;
        setStream(stream);
      })
    }
    // If video is off
    else{
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        const screenTrack = stream.getVideoTracks()[0];
        stream.current = screenTrack;
        myVideo.current.srcObject = stream;
        stream.getVideoTracks()[0].enabled = false;
        setStream(stream);
      })
    }
    // Switch screen between my video and shared screen
    setScreenSwitch(false);
  }

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      uname,
      setUname,
      callEnded,
      me,
      declineCall,
      shareScreenOff,
      shareScreenOn,
      callUser,
      leaveCall,
      answerCall,
      toggleVideo,
      toggleMic,
      micSwitch,
      videoSwitch,
    }}
    >
      {children}
    </SocketContext.Provider>
    
  );
};

export { ContextProvider, SocketContext };