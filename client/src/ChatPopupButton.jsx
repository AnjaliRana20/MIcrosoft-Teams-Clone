import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Chat } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    header: { 
      backgroundColor: '#303030',
      textAlign: "right",
      padding: "10px",
      position: "fixed",
      right: "0",
      top: "0",
      height: "30px",
      width: "20%",
      },
    }));
   
const ModalButton = props => {
    const classes = useStyles();
    const [isChatPopupOn, setIsChatPopupOn] = useState(false);

    // If Chat Popup is On then show highlighted button else show black button

    return ( 
    <div className={ classes.header }>
    {isChatPopupOn ?(
          <Button 
          style={{backgroundColor: '#696969', borderRadius: '60%', color: '#FFFFFF', bottom:'5px', height:'40px', width:'10px'}} 
          startIcon={<Chat style={{fontSize:25, height:'30px', width:'40px'}}/>} 
          onClick={() => {setIsChatPopupOn(!isChatPopupOn); 
            props.handleClick()}} >
              {props.children}
              </Button>
          ):(
          <Button style={{backgroundColor: '#000000', borderRadius: '60%', color: '#FFFFFF', bottom:'5px', height:'40px', width:'10px', shape: 'circle'}} startIcon={<Chat style={{fontSize:25, height:'30px', width:'40px'}}/>} onClick={() => {setIsChatPopupOn(!isChatPopupOn); props.handleClick()}} >{props.children}</Button>
          )}
    </div>
    );
    };
export default ModalButton;