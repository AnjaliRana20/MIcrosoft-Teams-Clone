https://docs.microsoft.com/en-us/visualstudio/javascript/tutorial-nodejs-with-react-and-jsx?view=vs-2019

React is a declarative, efficient, and flexible JavaScript library for building user interfaces

JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.

JSX is a JavaScript syntax extension, typically used with React to describe UI elements. JSX code must be transpiled to plain JavaScript before it can run in a browser.
# Microsoft-Teams-Clone 
1.npm init -y : creates package.json
2.Dependencies installation for backend : npm install cors express nodemon socket.io 
cors : enables cross origin requests
express : starts the server
nodemon : tool, refreshes server when something changes
socket.io : package that enables real-time event-based communication between one or more clients (main part)
3.make and complete index.js : has all the required code for the server
4.nodemon index.js // runs the server on localhost:5000
// server code finished


// Front end work start : (done using react)
5.npx create-react-app ./client // initialize empty react application
All files inside client have frontend and outside client have backend

// cd client
6.Dependencies installation for frontend :  npm install @material-ui/core @material-ui/icons react-copy-to-clipboard simple-peer socket.io-client 
7.Delete src, make new src

In src : 

8.make and partly complete index.js :
//
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
//
9.make and complete styles.css

10.make and partly complete App.jss
//
import React from 'react';
const App = () => {
    return (
        <div>
            Video Chat App
        </div>
    );
  };

export default App;
//
// In terminal : cd client; npm start
// Opens app on localhost:3000

11.Extend App.js :
//
import React from 'react';
import { Typography, AppBar } from '@material-ui/core'; //material ui is ui kit similar to bootstrap
import { makeStyles } from '@material-ui/core/styles';
const App = () => {
    return (
        <div>
            <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            {/*Video Player Component*/}
            {/*Notifications Component*/}
        </div>
    );
  };

export default App;
//
12.Make components folder in src
13.Make partly videoplayer.jsx, Options.jsx, Notifications.jsx in components folder : 
//
import React from 'react'

const videoplayer = () => {
    return (
        <div>
            videoplayer
        </div>
    )
}

export default videoplayer
//

14.Add them to App.js and give styles:

//
import React from 'react';
import { Typography, AppBar } from '@material-ui/core'; //material ui is ui kit similar to bootstrap
import { makeStyles } from '@material-ui/core/styles';

import Videoplayer from './components/Videoplayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
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

  
const App = () => {
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
        </div>
    );
  }

export default App;;
//

build functionalities of socket.io and webrtc :
15.Make SocketContext.js in src and complete it
16.Update index.js :
//
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';

ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
    document.getElementById('root'),
  );
//

17.
