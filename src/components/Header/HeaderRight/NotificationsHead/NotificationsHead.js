import React,{useState} from 'react';
import classes from './NotificationsHead.module.css';
import { FaBell } from "react-icons/fa";


const NotificationsHead =(props)=>{


const [styles, setStyles] = useState({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});


const onMouseEnterHandler=()=>{

setStyles({color:'var(--themeColor)',backgroundColor:'var(--headerRightIconsColor)'});

}


const onMouseLeaveHandler=()=>{

setStyles({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});

}








return (


<button className={classes.ActionItemsButton} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}  style={styles}>
<FaBell className={classes.UsersIcon} style={styles}/>
<i className={classes.alertMessage}><b>10</b></i>
</button>



);

}


export default NotificationsHead;
