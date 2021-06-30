import React from 'react';
import { Typography, AppBar } from '@material-ui/core'; //material ui is ui kit similar to bootstrap
import { makeStyles } from '@material-ui/core/styles';

import Videoplayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Buttons from './components/Buttons';


const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '50px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

  
const  App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            <Videoplayer />
            <Options>
                <Notifications />
            </Options>
            <Buttons />
        </div>
    );
}

export default App;