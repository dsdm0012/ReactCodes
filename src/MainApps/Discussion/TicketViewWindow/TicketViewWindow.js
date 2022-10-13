import React,{useState,useEffect} from "react";
import classes from "./TicketViewWindow.module.css"
import TicketInfo from "./TicketInfo";
import TicketDescription from "./TicketDescription";
import TicketComments from "./TicketComments";
import AddComment from "./AddComment"
import {getcomments} from "../../../CommonApps/AllAPICalls";

const TicketViewWindow = (props) =>{

const ticketId = props.ticketId;



const [commentObj,setCommentObj]=useState([{}]);
const [comAdded, setComAdded]=useState(false);


useEffect(()=>{

  getcomments({setCommentObj, ticketId});	
  setComAdded(comAdded=>false);

},[ticketId, comAdded]);








return(

<div className={classes.ticketViewWindow}>

  <div className={classes.ticketViewWindowContainer}>

   <TicketInfo ticketId={props.ticketId} data={props.data}/>

   <TicketDescription ticketId={props.ticketId}  data={props.data}/>


     {commentObj.map((comment,index)=>{


	       return <TicketComments  key={index}  commenttext={comment.commenttext} commenter={comment.commenter} />	     
           }

        )}






   <AddComment ticketId={props.ticketId} newCommentAdded={setComAdded} />

  </div>

</div>

);

}

export default TicketViewWindow;
