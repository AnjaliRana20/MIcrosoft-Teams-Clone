import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Videoplayer from './components/Videoplayer';
import Buttons from './components/Buttons';
import Popup from './CallPopup';
import Chat from './ChatPopup';

// This file combines the components

const useStyles = makeStyles(() => ({
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
          {/* Show all the components */}
            <Videoplayer />
            <Buttons />
            <Popup />
            <Chat />
        </div>
    );
}

export default App;