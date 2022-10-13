import React from 'react';
import classes from './SideNavBarButton.module.css';





const SideNavBarButton = (props) =>{

   const TheIcon = props.icon;





   return(

      <button onClick={props.onPress} className={classes.sideNavBarButton} style={props.buttonColor}> 
	   <TheIcon className={classes.dashIcon}/> <i className={classes.buttonText}> {props.name}</i> 
      </button>




   );


}

export default SideNavBarButton;
