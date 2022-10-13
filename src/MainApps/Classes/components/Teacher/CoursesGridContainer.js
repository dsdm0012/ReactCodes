import React from 'react';
import classes from './CoursesGridContainer.module.css';
import ClassViewShort from './ClassViewShort';
//import {getuser } from '../../../../../CommonApps/AllAPICalls';


const CoursesGridContainer =(props)=>{




/*

const [data, setData] = useState({
"dashboardcourses": []
});
const [courseData,getCourseData] = useState([]);

useEffect(()=>{
     getuser({setData});
  },[])


useEffect(()=>{
 let courseIds = data.dashboardcourses;
 console.log('courseIds:', courseIds);	
//getcoursesbyCourseId({courseId, getCourseData});

    courseIds.map((id, index)=>{
       if(id !==0){
         let globalCode=100000+id;
         getcoursesbyglobalCodeArray({globalCode, getCourseData});

       }
    }); 

return ()=>{
 getCourseData(courseData=>[]);

}

},[ data.dashboardcourses, props.rerender]);

*/










return (


<div className={classes.coursesGridContainer}>

	{  
	    props.selectedCourse !==null && props.selectedCourse.length > 0 && props.selectedCourse[0].classes.map((eclass,index)=>{
               return <ClassViewShort key={index} Class={eclass}  userData={props.userData} rerender={props.rerender} />
           }
          )
	}


        { props.selectedCourse !==null && props.selectedCourse.length > 0 && props.selectedCourse[0].classes.length ===0 && <div className={classes.noCourseWarning}>

               <h2>This course does not have any classes. You can start creating classes now!.</h2>
               </div>

	}





        {props.selectedCourse !==null && props.selectedCourse.length===0 && 

			<div className={classes.noCourseWarning}> <h2> No Course is selected. You need to select a course before accessing related classes.</h2> </div>


 	}









</div>


);


}

export default CoursesGridContainer;

