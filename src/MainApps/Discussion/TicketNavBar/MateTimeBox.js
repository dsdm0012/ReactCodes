import React from "react";
import classes from "./MateTimeBox.module.css";


const MateTimeBox =(props)=>{









return (

<div className={classes.mateTimeBox}>

 
  <div className={classes.astatus}><b> {props.data.status}</b>  </div>


</div>
);

}

export default MateTimeBox;

