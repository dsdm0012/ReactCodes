import React,{useState, memo} from 'react';
import classes from './CoursesGridContainer.module.css';
import CourseViewDashboard from './CourseViewDashboard_v2';
import CreateCourseForm from './Forms/CreateCourseForm';



const CoursesGridContainer =(props)=>{




   const [showCreateCourseForm, setShowCreateCourseForm] = useState(false);



   const closecreateCourseForm =()=>{
        setShowCreateCourseForm(false);
        props.rerender();
    }

   



return (


<>


<div className={classes.switchBar}>

   <button className={classes.createCourseButton} type="button" onClick={()=>setShowCreateCourseForm(true)}> +Create a course</button>

</div>	

  {showCreateCourseForm && <CreateCourseForm onPress = {closecreateCourseForm} />}


<div className={classes.coursesGridContainer}>

	{props.courseData.map((course,index)=>{

               return <CourseViewDashboard key={index} 
		                           Course={course} 
		                           rerender={props.rerender}
		                           userData={props.userData}
			                   />

           }

        )}





        {  props.courseData.length ===0 &&
                   <div className={classes.noCourseMessage}> 
			<span> There are no courses available in your dashboard. 
			    Create a course and share the course code with your students to get started.
			</span> 
		   </div>
        }



</div>


</>	

);


}

export default memo(CoursesGridContainer);

