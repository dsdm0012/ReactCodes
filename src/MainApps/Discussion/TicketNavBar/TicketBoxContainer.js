import React,{useState,useEffect} from "react";
import classes from "./TicketBoxContainer.module.css"
import LeftUserBox from "./LeftUserBox";
import {getalltickets} from '../../../CommonApps/AllAPICalls';







const TicketBoxContainer = (props) =>{


const [data, setData ] = useState([
    {
        "id": 6,
        "title": "GGGGG",
        "author": 1,
        "category": 1,
        "excerpt": "cdcd",
        "content": "adadfvdfv dc sd asdkad clkASD, ASDAS",
        "status": "open",
        "pstatus": "draft",
        "priority": "high",
        "resolution": "unresolved",
        "created_at": "2021-12-22T11:48:10.381307Z"
    }]);



useEffect(() =>{

    getalltickets({setData});

  },[]);	





return(

<div className={classes.leftUserBoxContainer}>



	{data.map((postDetail,index)=>{

               return <LeftUserBox key={index} userName={"CLM - "+postDetail.id} data={postDetail} onPress={()=>props.onPress(postDetail.id)}  />

	   }

        )}


</div>

);

}

export default TicketBoxContainer;
