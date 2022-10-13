import React from "react";
import classes from "./TicketNavBar.module.css"
import TopIdBarLeft from "./TopIdBarLeft"
import TopLeftSearchBar from "./TopLeftSearchBar";
import TicketBoxContainer from "./TicketBoxContainer";


const TicketNavBar = (props) =>{




return(

<div className={classes.chatNavBar}>

  
  <TopIdBarLeft />

  <TopLeftSearchBar/>

  <TicketBoxContainer onPress={props.onPress}  />


</div>	

);
	
}

export default TicketNavBar;
