import React,{useState,useEffect} from 'react';
import classes from './SideBarDashboard.module.css';
import SideNavBarButton from './SideNavBarButtonDashboard';
import {BsFillChatDotsFill, BsTable, BsFillCameraVideoFill,BsCalendarDay,BsJournalText,BsQuestionSquare} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import { useHistory } from "react-router-dom";
import QuickMeetingPage from './QuickMeetingPage';
import SideNavBarButtonQMeeting from './SideNavBarButtonQMeeting';

import {FaTools,FaExternalLinkAlt} from 'react-icons/fa';
import { useMediaPredicate } from "react-media-hook";




const SideBarDashboard =(props)=>{


    const smallerThan750px = useMediaPredicate("(max-width: 850px)");

    let history = useHistory();
    let inActivebuttonColor="var(--sideNavBarDashBoardBtnColor)";
    let inActivebuttonBkgColor="var(--sideNavBarDashBoardBkgColor)"; 

    const [sideNavBarWidth, setSideNavBarWidth] = useState(props.sideNavBarWidth);


    const [generalChatButtonColor, setGeneralChatButtonColor]=useState(
      {  backgroundColor:inActivebuttonBkgColor,  //"var(--sideNavBarDashBoardBtnBkgColor)",
         color:"var(--themeColor)",
         borderStyle:"none",
         borderColor:"var(--themeColor)",
         borderWidth:"1px"	  
      }	     
    );

    const [homeButtonColor, setHomeButtonColor]=useState(
      {  backgroundColor:"var(--sideNavBarDashBoardBtnBkgColor)",
         color:"var(--themeColor)",
         borderStyle:"none",
         borderColor:"var(--themeColor)",
         borderWidth:"1px"
      }
    );



    const [emailButtonColor, setEmailButtonColor]=useState(
      {  backgroundColor:"var(--sideNavBarDashBoardBtnBkgColor)",
         color:"var(--themeColor)",
         borderStyle:"none",
         borderColor:"var(--themeColor)",
         borderWidth:"1px"
      }
    );













    useEffect(() => {
        setSideNavBarWidth(props.sideNavBarWidth);
    }, [props.sideNavBarWidth]);


    const [showQuickMeetingInfo, setShowQuickMeetingInfo] = useState(false);
    const [meetingRoomName, setMeetingRoomName] = useState(null); 

    const createMeetingHandler =() =>{

       let userId= props.userData.id;

       	    
       let meetingRoomName_ = `meet.${userId}.${Date.now()}.${Math.random()*100 }`;
       setMeetingRoomName(meetingRoomName=>meetingRoomName_); 
      // console.log('meetingRoomName: ',meetingRoomName);
       setShowQuickMeetingInfo(true);

     // let meetingURL='http://app.diracai.com/video/meet.1.1663275331164.27.54381016977858'
     // let pattern = '/video/general/meetings/[1-9]+';
     // let pattern2 = '/video/meet.[1-9]+.[1-9]+.[1-9]+.[1-9]+'

     // let result = meetingURL.match(pattern2);	    
 
      //console.log("Matching Found?: ", result);	    




    } 


    useEffect(()=>{
        let inActivebuttonBkgColor="var(--sideNavBarDashBoardBkgColor)";

        let activeButtonColor= {  
	    backgroundColor:"linear-gradient(to right, var(--sideNavBarDashBoardOnClickBtnBkgColor) 100%, var(--themeColor) 0%)",
            color:"var(--sideNavBarDashBoardOnClickBtnColor)",
            borderStyle:"none",
            borderColor:"var(--themeColor)",
            borderWidth:"1px"
            };
        let inActivebuttonColor= {  backgroundColor:inActivebuttonBkgColor,  //"var(--sideNavBarDashBoardBtnBkgColor)",//#c2c3c4
            color:"var(--sideNavBarDashBoardBtnColor)",
            borderStyle:"solid",
            borderColor:"grey",
            borderWidth:"1px",
            };


        !props.generalChatMounted && setGeneralChatButtonColor(generalChatButtonColor=>inActivebuttonColor);
        props.generalChatMounted &&  setGeneralChatButtonColor(generalChatButtonColor=>activeButtonColor);


    },[props.generalChatMounted]);	


    useEffect(()=>{
       let inActivebuttonBkgColor="var(--sideNavBarDashBoardBkgColor)";

        let activeButtonColor= {  
	    //backgroundColor:"var(--sideNavBarDashBoardOnClickBtnBkgColor)",
            backgroundColor:"linear-gradient(to right, var(--sideNavBarDashBoardOnClickBtnBkgColor) 100%, var(--themeColor) 0%)",
            color:"var(--sideNavBarDashBoardOnClickBtnColor)",
            borderStyle:"none",
            borderColor:"var(--themeColor)",
            borderWidth:"1px"
            };
        let inActivebuttonColor= {  backgroundColor:inActivebuttonBkgColor, //"var(--sideNavBarDashBoardBtnBkgColor)",
            color:"var(--sideNavBarDashBoardBtnColor)",
            borderStyle:"solid",
            borderColor:"grey",
            borderWidth:"1px"
            };


        !props.homeMounted && setHomeButtonColor(homeButtonColor=>inActivebuttonColor);
        props.homeMounted &&  setHomeButtonColor(homeButtonColor=>activeButtonColor);


    },[props.homeMounted]);


     useEffect(()=>{
        let inActivebuttonBkgColor="var(--sideNavBarDashBoardBkgColor)";

        let activeButtonColor= {
            //backgroundColor:"var(--sideNavBarDashBoardOnClickBtnBkgColor)",
            backgroundColor:"linear-gradient(to right, var(--sideNavBarDashBoardOnClickBtnBkgColor) 100%, var(--themeColor) 0%)",
            color:"var(--sideNavBarDashBoardOnClickBtnColor)",
            borderStyle:"none",
            borderColor:"var(--themeColor)",
            borderWidth:"1px"
            };
        let inActivebuttonColor= {  backgroundColor: inActivebuttonBkgColor,//"var(--sideNavBarDashBoardBtnBkgColor)",
            color:"var(--sideNavBarDashBoardBtnColor)",
            borderStyle:"solid",
            borderColor:"grey",
            borderWidth:"1px",
            };

        !props.emailMounted && setEmailButtonColor(emailButtonColor=>inActivebuttonColor);
        props.emailMounted &&  setEmailButtonColor(emailButtonColor=>activeButtonColor);


    },[props.emailMounted]);

















    const generalChatHandler =() =>{
      history.push('/dashboard/generalchat');	  
      smallerThan750px && props.setWidth('var(--sideNavBarWidthOnContract)');
      smallerThan750px && props.setContract(false);
    }


    const homeHandler=()=>{
    history.push('/dashboard/general/courses');
    smallerThan750px && props.setWidth('var(--sideNavBarWidthOnContract)');
    smallerThan750px && props.setContract(false);


    }






    //const [appointButtonColor, setAppointButtonColor]=useState(inActivebuttonColor);
    //let appointButtonColor = inActivebuttonColor;



  /*     
   <SideNavBarButton onPress={appointmentsHandler} icon={BsChevronDoubleDown} name="Assignment Due" buttonColor={{background:appointButtonColor }}/>

   <SideNavBarButton onPress={appointmentsHandler} icon={BsChevronDoubleDown} name="Homework Due" buttonColor={{background:appointButtonColor }}/>

   <SideNavBarButton onPress={appointmentsHandler} icon={BsChevronDoubleDown} name="Appointments" buttonColor={{background:appointButtonColor }}/> 
  */


  const showChatWindowOptions=()=>{


   





  }



   const closeQuickMeetingInfo=()=>{
     setShowQuickMeetingInfo(false);
   }



   const emailHandler=()=>{
     history.push('/home/email');
     smallerThan750px && props.setWidth('var(--sideNavBarWidthOnContract)');
     smallerThan750px && props.setContract(false);
   }

   const utilityHandler=()=>{


   }

   const timeTableHandler=()=>{



   }










return (

<div className={classes.sideBarDashboard} style={{width:sideNavBarWidth}}>


  { showQuickMeetingInfo &&
  <QuickMeetingPage onPress={closeQuickMeetingInfo} 
	            userData={props.userData}
	            meetingRoomName={meetingRoomName}
	            />
  }




 { props.userData.usertype !==4 && 
 
  <>	 

   <SideNavBarButtonQMeeting onPress={createMeetingHandler}
         icon={BsFillCameraVideoFill}
         name="+Quick meeting"
         buttonColor={{background:'#00aff0',borderStyle:'none',color:'white' }}
         />



   <SideNavBarButton onPress={homeHandler}
         icon={AiFillHome}
         name="Dashboard"
         buttonColor={{  background: homeButtonColor.backgroundColor,
                         borderStyle: homeButtonColor.borderStyle,
                         borderColor: homeButtonColor.borderColor,
                         color: homeButtonColor.color}}
         />




    <SideNavBarButton onPress={generalChatHandler} 
	 icon={BsFillChatDotsFill} 
	 name="General Chat"
	 onMouseEnter={showChatWindowOptions}
	 buttonColor={{  background:generalChatButtonColor.backgroundColor,
			 borderStyle: generalChatButtonColor.borderStyle,
			 borderColor: generalChatButtonColor.borderColor,
	                 color: generalChatButtonColor.color}}
	 />



   <SideNavBarButton onPress={emailHandler}
         icon={MdEmail}
         name="Email"
         buttonColor={{ background:emailButtonColor.backgroundColor,
		        borderStyle:emailButtonColor.borderStyle,
			borderColor:emailButtonColor.borderColor,
			color:emailButtonColor.color }}
         />


  <SideNavBarButton onPress={utilityHandler}
         icon={BsCalendarDay}
         name="Calender"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />




   <SideNavBarButton onPress={timeTableHandler}
         icon={BsTable}
         name="+Time Table"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />

  <SideNavBarButton onPress={utilityHandler}
         icon={FaTools}
         name="Utility"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />


  <SideNavBarButton onPress={utilityHandler}
         icon={FaExternalLinkAlt}
         name="Useful links"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />







 
   <SideNavBarButton onPress={utilityHandler}
         icon={BsJournalText}
         name="Diary"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />


  <SideNavBarButton onPress={utilityHandler}
         icon={BsQuestionSquare}
         name="Help Center"
         buttonColor={{background:inActivebuttonBkgColor,borderStyle:'solid',borderColor:'grey',color:inActivebuttonColor }}
         />








    {/*	 
    <SideNavBarButton onPress={appointmentsHandler}
         icon={AiFillPhone} 
         name="Make a call "
         buttonColor={{background:appointButtonColor,borderStyle:'solid',borderColor:'var(--themeColor)' }}
         />
     */}






  </>

 }
</div>

);


}

export default SideBarDashboard;
