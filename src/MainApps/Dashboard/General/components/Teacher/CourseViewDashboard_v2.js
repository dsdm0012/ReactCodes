import React,{useState,useEffect, memo} from 'react'
import classes from './CourseViewDashboard_v2.module.css';
import {BsFillCheckSquareFill,BsThreeDotsVertical, BsCameraVideoFill,BsFillBasketFill} from 'react-icons/bs';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { useHistory } from "react-router-dom";
import {BsFillTrashFill, BsPeopleFill} from 'react-icons/bs';
import {BiEdit, BiVideoPlus} from 'react-icons/bi';
import {putcourseenroll, getuserbyId, deletedashboardcourses,deleteacourse} from '../../../../../CommonApps/AllAPICalls';
import {RiVideoAddFill} from 'react-icons/ri';
import coursePic from './coursePic.jpg';
import {MdDoubleArrow} from 'react-icons/md';
import SelectScreen from './SelectScreen';

//import { useMediaPredicate } from "react-media-hook";
import {GiTeacher} from "react-icons/gi";

import CourseCardDropDown from './CourseCardDropDown';
import CourseEditForm from './Forms/CourseEditForm';




const CourseViewDashboard = (props)=>{

    console.log("course card rerendering");

    //const smallerThan1400px = useMediaPredicate("(max-width: 1400px )");

    let history = useHistory();

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
	console.log("delete handler recreated");    
       alert("Are you sure you want to delete the course?");
       let courseId = props.Course.id;
       deleteacourse({courseId, props});
    }





   const [showDropDown, setShowDropDown] = useState(false);

   const showActionToolsHandler=()=>{
     setShowDropDown(true);
   }


    const [showCourseEditForm, setShowCourseEditForm] = useState(false);

    const showCourseEditFormHandler=()=>{     	    
       setShowCourseEditForm(showCourseEditForm=>true);
       setShowDropDown(showDropDown=>false);
       //console.log("oho baby");	    
    }



    //console.log("showDropDown: ", showDropDown);
   
    const closeCourseEditForm=()=>{
       
       setShowCourseEditForm(false);
       props.rerender();
    }





return (



<div className={classes.courseViewDashboard}  
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
	                    {/* !smallerThan1400px &&*/}
	                    <span> {props.Course.enrolled_students.length} Students</span>
		            		    
	              </div>
	              <div className={classes.topBar1_right}>  
                        <div className={classes.courseCode}> {props.Course.courseGlobalCode} </div> 
                        <div className={classes.notification}> <IoMdNotificationsOutline className={classes.notIcon}/> </div>
                        <div className={classes.dotsButton} > 
	                    <BsThreeDotsVertical className={classes.verticalDotsIcon} onClick={showActionToolsHandler}/>
                            {
                               showDropDown  &&

                                 <CourseCardDropDown setDropDown={setShowDropDown}
                                                     deleteCourseHandler={deleteCourseHandler}
                                                     showCourseEditFormHandler={showCourseEditFormHandler}
                                                     />
                            }



                            {  showCourseEditForm && 
					    <CourseEditForm onPress={closeCourseEditForm}
				                            Course={props.Course}
				                            userData={props.userData}
					    />

			    }


	                </div>






	              </div>
	        </div>
                <div className={classes.courseNameDiv}> 

                         <button className={classes.courseNameButton}
                                 onClick={courseSwitchHandler}
                               >
                               <b> {props.Course.courseShortName}</b>
                         </button>




	        </div>
                <div className={classes.middlePart}>  
	              <div className={classes.middlePart_left}> 
	                    <div className={classes.upcomingClassTime}><GiTeacher/> <span>9:30am, Today</span>  </div>
	                    
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
           {/* !smallerThan1400px &&*/} 
           <div className={classes.lowerPart_left}>
	        <div className={classes.lowerPartTitle}><b>Course Progress</b> </div>
	        <div className={classes.lowerPartInfo}> 
	             <div className={classes.progressBar}> 
	                  <div className={classes.progressWidth}> </div>
	             </div>
	        </div>
	   </div>
           
	   <div className={classes.lowerPart_middle}> 
	        <div className={classes.lowerPartTitle}><b>Tools</b> </div>
                <div className={classes.lowerPartInfo}> 
                     <div className={classes.oneTool}> <RiVideoAddFill/> </div>
	             <div className={classes.oneTool}> <BsCameraVideoFill/> </div>
                     <div className={classes.oneTool}> <BsCameraVideoFill/> </div>
	             <div className={classes.oneTool}> <BsFillBasketFill/> </div>
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

export default memo(CourseViewDashboard);
