import React,{useState,useEffect} from 'react';
import base from '../CommonAppUtilities/AppContentDiv.module.css';
import classes from './TicketsContentDiv.module.css';
import TicketNavBar from './TicketNavBar/TicketNavBar';
import TicketViewWindow from './TicketViewWindow/TicketViewWindow';

import {getticket} from '../../CommonApps/AllAPICalls';

const TicketsContentDiv=()=>{


const [ticketId, setTicketId]=useState(1);

const [data, setData ] = useState(
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
    });







useEffect(() =>

{
      getticket({ticketId, setData}); 
       

  },[ticketId]);




const ticketClickHandler=(ticketId)=>{

setTicketId(ticketId);
}








return (

<div className={base.appContentDiv}>	

  <div className={classes.contentDiv}>

	
	
     <TicketNavBar onPress={ticketClickHandler}/>
	
	
     <TicketViewWindow ticketId={ticketId} data={data}/>
      

  </div>

</div>

);

}


export default TicketsContentDiv;
