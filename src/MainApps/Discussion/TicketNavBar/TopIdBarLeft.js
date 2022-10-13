import React,{useState} from "react";
import classes from "./TopIdBarLeft.module.css"

import {BsPlus} from "react-icons/bs"

import CreateTicketForm from "./CreateTicketForm";


const TopIdBarLeft = () =>{


const [createPost,showCreateForm]=useState(false);



const showPostFormHandler=()=>{

showCreateForm(true);
}

const closeCreateFormHandler=()=>{
showCreateForm(false);

}




return(




<div className={classes.topIdBarLeft}>

<button className={classes.allTickets}> <b>All tickets</b> </button>	

<button className={classes.myTickets}> <b>Created by me </b></button>

<button className={classes.createTicket} onClick={showPostFormHandler}><BsPlus/> <b>Create ticket</b> </button>	


 {createPost && <CreateTicketForm onPress={closeCreateFormHandler}/> }


</div>

);

}

export default TopIdBarLeft;
