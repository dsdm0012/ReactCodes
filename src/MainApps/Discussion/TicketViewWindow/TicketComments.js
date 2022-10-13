import React,{useState,useEffect} from "react";
import classes from "./TicketComments.module.css"
//import {BsChevronDoubleDown} from "react-icons/bs";
import {getuserbyId} from '../../../CommonApps/AllAPICalls';


const TicketComments = (props) =>{

 const userId = props.commenter; 

  const [userData, setUserData] = useState({});
    useEffect(()=>{
    getuserbyId({ userId,setUserData});
  },[userId]);




return(

<div className={classes.ticketComments}>


         <div className={classes.commentTitle}> <button className={classes.commenterButton}> {userData.firstname} {userData.lastname}  </button> <span className={classes.addedComment}>added a comment</span> </div>

         <div className={classes.descriptionContent}>  
              	{props.commenttext}
         </div>

 
        <div>
	    <hr className={classes.hrLine}/>
        </div> 











  </div>



);

}

export default TicketComments;


