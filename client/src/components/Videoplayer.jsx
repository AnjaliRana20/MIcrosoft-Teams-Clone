import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
    margin: '50px',
  },
  paper: {
    padding: '2px',
    border: '2px solid black',
    margin: '40px',
    backgroundColor: '#FFFFFF',
  },
  typography: {
    fontFamily: 'Brush Script MT, Brush Script Std, cursive',
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: '6px',
    color: '#000000',
    fontStretch: 'ultra-condensed',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.paper}>
          {/* md = {6} for mobile phone's screen, and xs={12} for desktop's screen */}
          <Grid item xs={12} md={6}>
            <Typography 
            className={classes.typography} 
            variant="h5" 
            gutterBottom>
              {/* Show the name entered in Options.jsx at the top of video if its not null, else show You*/}
              {name || 'You'}
            </Typography>

            {/* Play my video inline */}
            <video 
            playsInline 
            muted ref={myVideo} 
            autoPlay 
            className={classes.video} 
            />
          </Grid>
        </Paper>
      )}
      
      {/* If call accepted then show the user's video */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography 
            className={classes.typography} 
            variant="h5" 
            gutterBottom>
              {/* Show name of the caller/receiver */}
              {call.name  || call.to || 'Unknown'}
            </Typography>
            {/* Play user video inline */}
            <video 
            playsInline ref={userVideo} 
            autoPlay className={classes.video} 
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;