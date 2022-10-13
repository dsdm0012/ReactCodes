import React from "react";
import classes from "./LeftUserBox.module.css"
import MateIconBox from "./MateIconBox";
import MateInfoBox from "./MateInfoBox";







const LeftUserBox = (props) =>{




return(

<div className={classes.leftUserBox}>


<button className={classes.leftUserBoxButton} onClick={props.onPress}  >

<MateIconBox userImage={props.userImage} data={props.data} />

<MateInfoBox userName={props.userName}  data={props.data} />


</button>
</div>

);

}

export default LeftUserBox;
