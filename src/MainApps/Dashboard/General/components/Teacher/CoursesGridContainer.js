import React,{useState} from 'react';
import classes from './CoursesGridContainer.module.css';
import CourseViewDashboard from './CourseViewDashboard_v2';
import CreateCourseForm from './CourseCreate/CreateCourseForm';

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

               return <CourseViewDashboard key={index} Course={course} userData={props.userData} rerender={props.rerender} />

           }

        )}


        {  props.courseData.length ===0 &&
                   <div className={classes.noCourseMessage}> 
			<h1> There are no courses available in your dashboard. 
			    Create a course and share the course code with your students to get started.
			</h1> 
		   </div>
        }



</div>


</>	

);


}

export default CoursesGridContainer;

