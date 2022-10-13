import React,{useState, useEffect} from 'react';
import classes from './ActionItemsHead.module.css';
import { FaUsers } from "react-icons/fa";
//import GeneralDropDown from './GeneralDropDown';
//import UserHeadDropDown from '../UserHead/UserHeadDropDown';

import CourseEnrollmentRequest from './CourseEnrollmentRequest';

const ActionItemHead =(props)=>{


    const [notificationNum, setNotificationNum] = useState("0");

    const [dropDown, setDropDown] = useState(false);

    const [styles, setStyles] = useState({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});


    //const [showActionItems, setShowActionItems] = useState(true);	
 

    const onMouseEnterHandler=()=>{
        setStyles({color:'var(--themeColor)',backgroundColor:'var(--headerRightIconsColor)'});
    }


    const onMouseLeaveHandler=()=>{
        setStyles({color:'var(--headerRightIconsColor)',backgroundColor:'var(--themeColor)'});
    }

   
    const actionItemShowHandler= ()=>{
     //console.log("show action items");	    
     //setShowActionItems(true);
       setDropDown(true);
    }

    


   //props.dashboardCourses.forEach((course, index)=>{


   //});




    console.log("enroll_requests: ", props.userData);


    //let numNot=props.userData !==null && props.userData.courseenrollment_requests !==null ? props.userData.courseenrollment_requests.length: "0";	


return (

    <div className={classes.actionItemsParentDiv}>

      <button  className={classes.ActionItemsButton} 
	 onMouseEnter={onMouseEnterHandler} 
	 onMouseLeave={onMouseLeaveHandler}  
	 onClick={actionItemShowHandler}
	 style={styles} 
      >
         <FaUsers className={classes.UsersIcon} style={styles}/>
	 {/* numNot !=="0" &&
            <i className={classes.alertMessage}><b>3</b></i> 
         */}		 
      </button>

	{ dropDown &&
	<CourseEnrollmentRequest  setDropDown={setDropDown}/>
        }



        { /*showActionItems && <GeneralDropDown setDropDown={actionItemShowHandler}/>*/}


	{/*<div className={classes.test}> Bibhuprasad mahakud is woring on a start up</div>*/}

   </div>


);

}


export default ActionItemHead;

