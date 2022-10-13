import React from "react";
import classes from "./TicketTitleBar.module.css"

const TicketTitleBar = (props) =>{

return(

<div className={classes.ticketTitleBar}>

<i> <span className={classes.ticketNumber}>CLM-{props.ticketId} </span>:<b> {props.data.title} </b></i>

</div>

);

}

export default TicketTitleBar;

