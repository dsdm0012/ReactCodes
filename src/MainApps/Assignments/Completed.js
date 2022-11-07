import classes2 from './Completed.module.css';
import AssignmentBox from './AssignmentBox';



function Completed(props){
  console.log('hello',props.assignmentCompletedData);
    return(
      
      <div className={classes2.completeddiv}>
      
      { 
        props.assignmentCompletedData !==null && 
        props.assignmentCompletedData.map((oneAssignment, index)=>{

          return <AssignmentBox key={index} oneAssignment={oneAssignment}/>
          
          })
          
      }

      </div>
    );
};
export default Completed;