import OutsideAlerter from "../UserHead/OutsideAlerter";



import classes from './CourseEnrollmentRequest.module.css';

const CourseEnrollmentRequest=(props)=>{



   



return (

<OutsideAlerter setDropDown={props.setDropDown}>

<div className={classes.courseEnrollmentRequest}>

        <div className={classes.allRequests}>  

            <div className={classes.oneRequest}>      
              <p className={classes.textBox1}>  
	           <span className={classes.requesterName}> Mr. Shubham Panda </span>
	           wants to enroll in your 
	      </p>
	      <p className={classes.textBox2}> Course: 100032</p>
              <div className={classes.ApproveRejectBtnDiv}>
                   <button type="button" className={classes.approveButton}> <b>Approve</b> </button>
                   <button type="button" className={classes.rejectButton}> <b>Reject</b> </button>
              </div>
            </div>



        </div>   


</div>

</OutsideAlerter>




);

}

export default CourseEnrollmentRequest;
