import classes from './Pending.module.css';
import classes2 from './Completed.module.css';
import classes3 from './All.module.css';
import {RiFileEditFill} from 'react-icons/ri';
import {RiDeleteBin6Fill} from 'react-icons/ri';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {FaHandPointRight} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import {HiDotsVertical} from 'react-icons/hi';
import {GrScorecard} from 'react-icons/gr';


const AssignmentBoxPending=(props)=>{

    return (
        
        <div className={classes.assignmentBox}>
            <div className={classes.assignmentDetails}>
            
           <div className={classes.status}>{props.oneAssignment.status_}Ongoing</div>
         <div> Assign by:<div style={{fontSize:'16px', fontWeight:'bold',color:'#696969'}}>{props.oneAssignment.creater}</div></div>
           <div>Start Date:<div style={{fontSize:'16px', fontWeight:'bold',color:'#696969'}}>{props.oneAssignment.publishDate}</div></div>
           <div> Due Date: <div style={{fontSize:'16px', fontWeight:'bold',color:'#696969'}}>{props.oneAssignment.dueDate}</div></div>
           </div>
          
           
            <div className={classes.assignmentTitle}>
           <div><FaHandPointRight style={{marginRight:'5px'}}/>{props.oneAssignment.title}</div>
           <div><IoMdNotifications/> <HiDotsVertical/></div>
            </div>
           
         <div className={classes.assignmentDescription}>
         <div className={classes.totalCredit}><GrScorecard style={{fontSize: '15px'}}/> {props.oneAssignment.credit}</div>
        
           <div style={{marginRight:'20px', fontSize:'20px'}}><FaAngleDoubleRight/></div>
         </div>
         <div className={classes.courseid}>{props.oneAssignment.id}</div>
           </div>
           
         
        
         

      
     
    )
};

export const AssignmentBoxCompleted=(props)=>{
    return (
        
        <div className={classes3.assignmentBox}>
        <div className={classes3.box1}>
         <div className={classes3.assignment}>
          <strong><FaHandPointRight/> <u>{props.oneAssignment1.title}</u></strong>
          <p><strong>Start Date :</strong> {props.oneAssignment1.publishDate}
          </p>
          <p>  <strong>Due Date:</strong> {props.oneAssignment1.dueDate}</p>
          
          </div>
          <div className={classes3.totalCredit}><strong>Total Credit:</strong> {props.oneAssignment1.credit}</div>
          <div className={classes3.icons}>
          
           <span className={classes3.courseid}>{props.oneAssignment1.id}</span>
       <span><RiFileEditFill style={{marginLeft: '10px'}}/></span>
       <span><RiDeleteBin6Fill style={{marginLeft: '10px'}}/></span>
       <div><FaAngleDoubleRight style={{fontSize:'25px', marginTop: '25px', marginLeft:'90px'}}/></div>
          </div>
        
        </div>
        
        <div className={classes3.box2}>
         <div><strong>Assign by:</strong> {props.oneAssignment1.creater}</div>
         <div><strong>Progress</strong> <progress value="10" max="100"> {props.oneAssignment1.progress} </progress></div>
         <div><strong>Status:</strong> <span>{props.oneAssignment1.status_}</span></div>
         </div> 
        
        </div>
      
     
    )
};

export const AssignmentBoxAll=(props)=>{
    return (
        
        <div className={classes2.assignmentBox}>
        <div className={classes2.box1}>
         <div className={classes2.assignment}>
          <strong><FaHandPointRight/> <u>{props.completeAssignment.title}</u></strong>
          <p><strong>Start Date :</strong> {props.completeAssignment.publishDate}
          </p>
          <p>  <strong>Due Date:</strong> {props.completeAssignment.dueDate}</p>
          
          </div>
          <div className={classes2.totalCredit}><strong>Total Credit:</strong> {props.oneAssignment.credit}</div>
          <div className={classes2.icons}>
          
           <span className={classes2.courseid}>{props.completeAssignment.id}</span>
       <span><RiFileEditFill style={{marginLeft: '10px'}}/></span>
       <span><RiDeleteBin6Fill style={{marginLeft: '10px'}}/></span>
       <div><FaAngleDoubleRight style={{fontSize:'25px', marginTop: '25px', marginLeft:'90px'}}/></div>
          </div>
        
        </div>
        
        <div className={classes2.box2}>
         <div><strong>Assign by:</strong> {props.completeAssignment.creater}</div>
         <div><strong>Progress</strong> <progress value="10" max="100"> {props.completeAssignment.progress} </progress></div>
         <div><strong>Status:</strong> <span>{props.completeAssignment.status_}Completed</span></div>
         </div> 
        
        </div>
      
     
    )
};

export default AssignmentBoxPending;
