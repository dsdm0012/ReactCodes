import React,{useState,useEffect} from "react";
import classes from "./TicketProp.module.css"
import {getuserbyId, getcategorybyId} from '../../../CommonApps/AllAPICalls';

const TicketProp = (props) =>{



const userId=props.data.author;
const ticketCategory = props.data.category;



const [userData, setUserData ] = useState({});
const [catData, setCatData] = useState({});


useEffect(() =>{

   getuserbyId({userId, setUserData});

  },[userId]);


useEffect(()=>{
 
   getcategorybyId({ticketCategory, setCatData});

},[ticketCategory]);





return(

<div className={classes.ticketProp}>

   <div className={classes.info}> 
     <button className={classes.proptitlebtn}> <b>Details</b></button>
     <ul>
      <li> <span className={classes.params}>Category:</span>  {catData.name}</li>
      <li> <span className={classes.params}>Priority:</span> {props.data.priority}</li>
      <li> <span className={classes.params}>Status:</span>  <span className={classes.statusholder}> <b> {props.data.status} </b></span></li>	
      <li> <span className={classes.params}>Resolution:</span> {props.data.resolution} </li>

     </ul>
   </div>

<div className={classes.people}>
  
  <button className={classes.proptitlebtn}> <b>People</b></button>	

  <ul>
      <li> <span className={classes.params}>Created by :</span>  {userData.firstname} {userData.lastname}</li>
      <li> <span className={classes.params}>Last updated by :</span> Ipsita Nanda </li>
      <li> <span className={classes.params}>Visibility :</span> All </li>	 

     </ul>

</div>

   <div className={classes.dates}> 
   <button className={classes.proptitlebtn}> <b>Dates</b></button>
      <ul>
        <li> <span className={classes.params}>Created at :</span>  {props.data.created_at}</li>
        <li> <span className={classes.params}>Last updated at :</span> June 2021 </li>

     </ul>




   </div>



</div>

);

}

export default TicketProp;
