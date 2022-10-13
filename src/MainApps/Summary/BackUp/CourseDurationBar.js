import classes from './InstituteBar.module.css';
import {BiEdit} from 'react-icons/bi';


const InstituteBar=(props)=>{

return (

<div className={classes.instituteBar}>

   <i className={classes.titleSpace}> <span>COURSE DURATION </span>   <button> <BiEdit className={classes.editIcon}/></button></i> 
   <button> 
	{ props.selectedCourse.length>0 && (
	    props.selectedCourse[0].courseStartDate + 
		" --- " 
	   + props.selectedCourse[0].courseEndDate
         )
	}  
   </button>

</div>

);

}

export default InstituteBar;
