import React,{useState} from 'react';
import classes from './MessagesHead.module.css';
import { FaComments } from "react-icons/fa";


const MessagesHead =(props)=>{


const [styles, setStyles] = useState({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});


const onMouseEnterHandler=()=>{

setStyles({color:'var(--themeColor)',backgroundColor:'var(--headerRightIconsColor)'});

}


const onMouseLeaveHandler=()=>{

setStyles({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});

}







return (


<button className={classes.ActionItemsButton} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}  style={styles} >
<FaComments className={classes.UsersIcon} style={styles}/>
<i className={classes.alertMessage}><b>9</b></i>
</button>



);

}


export default MessagesHead;

