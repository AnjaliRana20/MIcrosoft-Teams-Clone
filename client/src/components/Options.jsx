import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { PhoneDisabledOutlined, PhoneEnabledOutlined } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    position: 'absolute',
    left: '30px',
    top: '150px',
    bottom: '10px',
    width: '300px',
    height: '380px',
    border: '3px solid black',
    borderRadius: '8%',
    backgroundColor: '#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
  },
  container: {
    width: '300px',
    margin: '0px 0',
    padding: 10,
    [theme.breakpoints.down('xs')]: {
      width: '20%',
    },
    justifyContent:'center',
    alignItems:'center',
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 8,
  },
  paper: {
    padding: '10px 15px',
    border: '2px solid black',
    backgroundColor: '#000000',
  },
}));

// It contains the Call Popup box's content
// Here we fill Our name, Copy the id, and call/hangup the call
// children is the notification of call
const Options = ({ children }) => {
  const { me, name, setName, uname, setUname } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();
  const { callAccepted, callEnded, leaveCall,  callUser } = useContext(SocketContext);
  
  return (
    <Container className={classes.container}>
      <Paper elevation={10} >
        <form className={classes.root} noValidate autoComplete="off">
        <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.padding}>
              <Typography 
              gutterBottom style={
                {backgroundColor: 'darkblue',      
                 border: "3px solid black",
                 position: 'absolute',
                 left: '60px', 
                 top: '8px', 
                 width: '50%',
                 fontFamily: 'Brush Script MT, Brush Script Std, cursive',
                 fontWeight: 'bold', 
                 color: '#FFFFFF',
                 textAlign:'center',
                 justifyContent:'center'}
              } 
              variant="h6">
                WELCOME
              </Typography>
              <br></br>

              {/* Enter Your Name here textfield */}
              <TextField 
              label="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}  
              fullWidth/>

              {/* Copy your id button */}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button 
                variant="contained"  
                fullWidth style={{backgroundColor: '#000000', color: '#FFFFFF'}}  
                startIcon={<Assignment fontSize="large" />} 
                fullwidth
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            
            
            <Grid item xs={12} className={classes.padding}>
              <Typography 
              gutterBottom style={
                {backgroundColor: 'darkblue', 
                 border: "3px solid black",
                 position: 'absolute',
                 left: '60px', 
                 top: '160px', 
                 width: '50%',
                 fontFamily: 'Brush Script MT, Brush Script Std, cursive',  
                 fontWeight: 'bold', 
                 color: '#FFFFFF',
                 textAlign:'center',
                 justifyContent:'center'}
              } 
              variant="h6">
                LETS CALL
              </Typography>
              
              {/* Enter Name of Your Friend */}
              <TextField 
              label="Friend's Name" 
              value={uname} 
              onChange={(e) => setUname(e.target.value)}  
              fullWidth/>

              {/* Enter ID to call here */}
              <TextField  
              fullWidth label="ID to call" 
              value={idToCall} 
              onChange={(e) => setIdToCall(e.target.value)} 
              />
              
              {/* Call and Hangup Buttons */}
              { callAccepted && !callEnded ? (
                <Button 
                variant="contained" 
                color="secondary" 
                fullWidth 
                startIcon={<PhoneDisabledOutlined fontSize="large" />} 
                onClick={leaveCall} className={classes.margin}
                >
                  Hang Up
                </Button>
              ) : (
                <Button 
                variant="contained"  
                fullWidth style={{backgroundColor: '#000000', color: '#FFFFFF'}} 
                startIcon={<PhoneEnabledOutlined fontSize="large" />} 
                onClick={() => callUser(idToCall)} 
                className={classes.margin}
                >
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
       {children}
    </Container>
  );
};

export default Options;