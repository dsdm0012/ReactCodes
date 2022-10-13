

import classes from './InstructorUnit.module.css';
import JackyImage from './Jacky.jpeg';





const InstructorUnit=()=>{


return (

<div className={classes.unitBar}>

    <div className={classes.instructorDetailDiv}>
         <img   src={JackyImage} className={classes.instructorImage}/>
	 <div className={classes.instructorInfo}> 
	       <i className={classes.instructorTitle}> Instructor</i>
	       <i className={classes.instructorName}>Dr. Bibhuprasad Mahakud</i>
	 </div>
    </div>





</div>

);	

}


export default InstructorUnit;
