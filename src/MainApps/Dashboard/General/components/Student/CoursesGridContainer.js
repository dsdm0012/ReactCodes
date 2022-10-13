import React,{useState} from 'react';
import classes from './CoursesGridContainer.module.css';
import CourseViewDashboard from './CourseViewDashboard_v2';
import CreateCourseForm from './Forms/CreateCourseForm';

const CoursesGridContainer =(props)=>{




   const [showCreateCourseForm, setShowCreateCourseForm] = useState(false);



   const closecreateCourseForm =()=>{
        setShowCreateCourseForm(false);
        props.rerender();
    }

   
    console.log("courseData: ", props.courseData);


return (


<>


<div className={classes.switchBar}>

   <button className={classes.createCourseButton} type="button" onClick={()=>setShowCreateCourseForm(true)}> +Add a course</button>

</div>	

  {showCreateCourseForm && <CreateCourseForm onPress = {closecreateCourseForm} 
	                                     userData={props.userData}
	                                     
	                                     />
  }


<div className={classes.coursesGridContainer}>

	{props.courseData.map((course,index)=>{

               return <CourseViewDashboard key={index} Course={course} userData={props.userData} rerender={props.rerender} />

           }

        )}


        {  props.courseData.length ===0 &&
                   <div className={classes.noCourseMessage}> 
			<h1> There are no courses available in your dashboard. 
			    Add a course and send enrollment request to your teacher to get started.
			</h1> 
		   </div>
        }



</div>


</>	

);


}

export default CoursesGridContainer;

