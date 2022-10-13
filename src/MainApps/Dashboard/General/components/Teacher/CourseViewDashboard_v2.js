import React,{useState,useEffect} from 'react'
import classes from './CourseViewDashboard_v2.module.css';
import {BsFillCheckSquareFill,BsThreeDotsVertical} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { useHistory } from "react-router-dom";
import {BsFillTrashFill, BsPeopleFill} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import {putcourseenroll, getuserbyId, deletedashboardcourses,deleteacourse} from '../../../../../CommonApps/AllAPICalls';

import coursePic from './coursePic.jpg';
import {MdDoubleArrow} from 'react-icons/md';
import SelectScreen from './SelectScreen';

import { useMediaPredicate } from "react-media-hook";




const CourseViewDashboard = (props)=>{



    const smallerThan1400px = useMediaPredicate("(max-width: 1400px )");

    let history = useHistory();
    const [style,setStyle]=useState({
          primary:'lightgrey',

          courseNameColor:"black",
          courseNameTextDecoration:"none"

    });


    let selectedCourse = localStorage.getItem('preferredCourseId');

    const [statusBkgColor, setStatusBkgColor] = useState('#25D366'); 
   

    let enrolledstudents = props.Course.enrolled_students;
 

    const ApproveHandler = (userId)=>{
        let enrollId = userId;
        let courseId = props.Course.id;	
       // enrolledstudents.push(enrollId);
       // putcourseenroll({courseId, enrolledstudents});
    }





    const courseSwitchHandler = ()=>{

      localStorage.setItem('preferredCourseId', props.Course.id);
      //window.location.reload(false);
      props.rerender();
      history.push('/course/summary');	    
    }



    const courseSwitchAndMoveHandler = ()=>{
     //localStorage.setItem('preferredCourseId', props.Course.id);	    	    
     //setShowSelectScreen(showSelectScreen=>false);
     localStorage.setItem('preferredCourseId', props.Course.id);
     props.rerender();	    
     history.push('/course/summary');
     

    }











    const deleteCourseHandler=()=>{
       alert("Are you sure you want to delete the course?");
       let courseId = props.Course.id;
       deleteacourse({courseId, props});
    }



    const changeStyleOnMouseEnterHandler=()=>{
      setStyle( {...style,  courseNameColor:"var(--themeColor)", courseNameTextDecoration:"underline"});
    }


   const changeStyleOnMouseLeaveHandler	=()=>{
      setStyle( {...style,  courseNameColor:"black",courseNameTextDecoration:"none"});
   }


   const [showDropDown, setShowDropDown] = useState(false);

   const showActionToolsHandler=()=>{
     setShowDropDown(showDropDown=>!showDropDown);

   }







return (



<div className={classes.courseViewDashboard}  
	onMouseEnter={changeStyleOnMouseEnterHandler} 
	onMouseLeave={changeStyleOnMouseLeaveHandler}
	>

  
   <div className={classes.innerMarginDiv}>	

      <div className={classes.upperPart}> 
	  <div className={classes.picDiv}>
	     <img src={coursePic} className={classes.picStyle} />
	  </div>
	  <div className={classes.upperInfoDiv}> 
	        <div className={classes.topBar1}>
	              <div className={classes.topBar1_left}>
	                    <span> {props.Course.designedFor} </span>
	                    { !smallerThan1400px &&
	                    <span> {props.Course.enrolled_students.length} Students</span>
		            }		    
	              </div>
	              <div className={classes.topBar1_right}>  
                        <div className={classes.courseCode}> {props.Course.courseGlobalCode} </div> 
                        <div className={classes.notification}> <IoMdNotificationsOutline className={classes.notIcon}/> </div>
                        <div className={classes.dotsButton} onClick={showActionToolsHandler}> 
	                    <BsThreeDotsVertical/>

	                    {
			       showDropDown  &&	
				<div className={classes.dropdownButtons}>
				    <button type="button" className={classes.dropdownButton}> edit 
				    </button>
				    <button type="button" className={classes.dropdownButton} onClick={deleteCourseHandler}> delete
				    </button>
	                        </div>  
			    }	    
	                </div>
	              </div>
	        </div>
                <div className={classes.courseNameDiv}> 
	                <button style={{color:style.courseNameColor,
					textDecoration:style.courseNameTextDecoration}}
	                        className={classes.courseNameButton}
	                        onClick={courseSwitchHandler}
	                       >
	                       <b> {props.Course.courseShortName}</b>
	                </button>  
	        </div>
                <div className={classes.middlePart}>  
	              <div className={classes.middlePart_left}> 
	                    <div className={classes.upcomingClassTitle}>Upcoming class  </div>
	                    <div className={classes.upcomingClassTime}> 9:30am, Today  </div>
	                    
	              </div>  

                      <div className={classes.middlePart_middle}>  
	       
	              </div>

	              <div className={classes.middlePart_right}>
        
                                 <button type="button" className={classes.goToCourseButton} onClick={courseSwitchHandler}> 
	                             <MdDoubleArrow className={classes.goToCourseBtnIcon}/> 
	                         </button>

	              </div>

	        </div>
	  </div>
      </div>     
        
    
      <div className={classes.lowerPart}>
           { !smallerThan1400px && 
           <div className={classes.lowerPart_left}>
	        <div className={classes.lowerPartTitle}><b>Course Progress</b> </div>
	        <div className={classes.lowerPartInfo}> 
	             <div className={classes.progressBar}> 
	                  <div className={classes.progressWidth}> </div>
	             </div>
	        </div>
	   </div>
           }
	   <div className={classes.lowerPart_middle}> 
	        <div className={classes.lowerPartTitle}><b>Tools</b> </div>
                <div className={classes.lowerPartInfo}> 
                     <div className={classes.oneTool}> </div>
	             <div className={classes.oneTool}> </div>
                     <div className={classes.oneTool}> </div>
	             <div className={classes.oneTool}> </div>
	        </div>
	   </div>
	   <div className={classes.lowerPart_right}> 
	        <div className={classes.lowerPartTitle}><b>Instructor</b> </div>
                <div className={classes.lowerPartInfo}>  
	            <b> {props.Course.teacher.firstname} {props.Course.teacher.lastname}</b>
	        </div>
	   </div>


      </div> 


  </div>


</div>


);

}

export default CourseViewDashboard;
