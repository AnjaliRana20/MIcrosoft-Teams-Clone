import React from 'react';
import { Typography, AppBar } from '@material-ui/core'; //material ui is ui kit similar to bootstrap
import { makeStyles } from '@material-ui/core/styles';

import Videoplayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Buttons from './components/Buttons';
import Popup from './CallPopup';
import Chat from './ChatPopup';

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
            <Videoplayer />
            <Buttons />
            <Popup />
            <Chat />
        </div>
    );
}

export default App;