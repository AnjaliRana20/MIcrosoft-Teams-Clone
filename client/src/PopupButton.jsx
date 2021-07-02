import React from 'react';
import style from './styles.css';
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { PhoneOutlined } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    header: { 
      backgroundColor: "#000000",
      textAlign: "right",
      padding: "10px",
      position: "fixed",
      right: "0",
      top: "0",
      height: "30px",
      width: "100%",
      },
    }));
   
const ModalButton = props => {
    const classes = useStyles();
    return ( 
    <div className={ classes.header }>
    <Button style={{backgroundColor: '#696969', color: '#FFFFFF'}} startIcon={<PhoneOutlined style={{fontSize:20}}/>} onClick={props.handleClick}>{props.children}</Button>
    </div>
    );
    };
export default ModalButton;