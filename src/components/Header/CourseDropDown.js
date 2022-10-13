import React,{useEffect} from 'react';
import classes from './CourseDropDown.module.css';
//import { FaGraduationCap,FaRegUser } from "react-icons/fa";
//import { FiSettings,FiHelpCircle,FiLogOut } from "react-icons/fi";
//import { useHistory } from 'react-router-dom';
//import OutsideAlerter from "./HeaderRight/UserHead/OutsideAlerter";


const UserHeadDropDown = (props) =>{

   //console.log("rerendering drop down");


    const courseSwitchHandler = (courseId)=>{
       localStorage.setItem('preferredCourseId', courseId);
       window.location.reload(false);
    }

    //const [buttonStyle, setButtonStyle] = useState({
       //backgroundColor:"#b8d1ff",
       //color:"var(--themeColor)"	    
    //});

   let selectedCourseId = localStorage.getItem('preferredCourseId');

   useEffect(()=>{



   },[selectedCourseId]);

   //const onMouseOverButton=()=>{
   //setButtonStyle({
   //  backgroundColor:"#ffd4d1",
   //  color:"#ff5349"
   //});

   //}

   //const onMouseLeaveButton=()=>{
     //setButtonStyle({
     //  backgroundColor:"#b8d1ff",
     //  color:"var(--themeColor)"
     //});

   //}


  let buttonStyle1={backgroundColor:"#b8d1ff",
    color:"var(--themeColor)"};

  let buttonStyle2={backgroundColor:"#ffd4d1",
    color:"#ff5349"};	


  //console.log("selectedCourseId", typeof selectedCourseId)



return (


    <div className={classes.DropDown} >
	 { props.userData.usertype ===4 &&
        <div className={classes.courseSelectText} > <b> Select a Project</b></div>	
         }

         { props.userData.usertype !==4 &&
        <div className={classes.courseSelectText} > <b> Select a Course</b></div>
         }



       {
            props.dashboardCourses.map((course, index)=>{


                    return  <button className={classes.courseBox} 
		                    onClick={()=>courseSwitchHandler(course.id)} 
		                    key={index}
		                    style={Number(selectedCourseId) === course.id? buttonStyle2 : buttonStyle1}
			    > 
			           <b> {course.subject+":  "}
		                   {course.courseGlobalCode}</b>
			    </button>

            })
       }


       {
           props.dashboardCourses.length===0 && <div style={{color: 'grey'}}> No courses available!</div>

       }





    </div>	




);

}


export default UserHeadDropDown;

