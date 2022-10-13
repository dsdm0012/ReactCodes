import React,{useState,useEffect, useCallback, useMemo} from 'react';
import classes from './TopToolBarV1.module.css';
import TopToolBox from './TopToolBoxV1';
//import CreateCourseForm from './CourseCreate/CreateCourseForm';
import {BsLayoutTextSidebarReverse, BsFillCameraReelsFill, BsPencilSquare,BsSearch} from 'react-icons/bs';
import {GiTeacher} from "react-icons/gi";
import {CgClipboard} from 'react-icons/cg';

import {MdOutlineDashboard} from 'react-icons/md';


import TopToolBarLeft from './TopToolBarLeft';


const TopToolBar =(props)=>{





    //console.log('Top Tol bar teacher rendering');

    //const [numOngoing, setNumOngoing] = useState(0);

    const [toolBoxStyle1, setToolBoxStyle1] = useState(
      {
	highLightColor:"var(--themeColor)",
        iconColor:"var(--themeColor)",
        iconTitleColor:"var(--themeColor)"     
      });









    const [toolBoxStyle2, setToolBoxStyle2] = useState(
      {
	highLightColor:"white",
        iconColor:"grey",
        iconTitleColor:"black"
    });



    const [toolBoxStyle3, setToolBoxStyle3] = useState({
     
	highLightColor:"white",
        iconColor:"grey",
        iconTitleColor:"black"
    });








    const [titleColor, setTitleColor]= useState('black');


    const [toolBoxStyle4, setToolBoxStyle4] = useState({
    
	highLightColor:"white",
        iconColor:"grey",
        iconTitleColor:"black"
    });



    const [toolBoxStyle5, setToolBoxStyle5] = useState(
     {
	highLightColor:"white",
        iconColor:"grey",
        iconTitleColor:"black"
    });













    const showCoursesHandler = useCallback(()=>{
       setToolBoxStyle1( { highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
       setToolBoxStyle2( { highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});	 
       setToolBoxStyle3( { highLightColor:"white",iconColor:"grey",iconTitleColor:"black"})
       setToolBoxStyle4( { highLightColor:"white",iconColor:"grey",iconTitleColor:"black"})
       setToolBoxStyle5( { highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});	    
       props.showCourses();	    
    },[])

    //const closecreateCourseForm =()=>{
    //    setShowCreateCourseForm(false);
    //    props.onPress();
    //}




    const showClassesHandler = useCallback(() =>{
       setToolBoxStyle2( {  highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
       setToolBoxStyle1( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle3( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle4( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle5( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});	    
       props.showClasses();

    },[])


    const showExamsHandler = useCallback(() =>{

       setToolBoxStyle3( {  highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
       setToolBoxStyle1( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle2( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle4( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle5( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       props.showExams();
    },[])


    const coursesStyle = useMemo(()=>{

      return {
              highLightColor: toolBoxStyle1.highLightColor, 
	      iconColor: toolBoxStyle1.iconColor, 
	      iconTitleColor: toolBoxStyle1.iconTitleColor
             }

    },[toolBoxStyle1.highLightColor, toolBoxStyle1.iconColor, toolBoxStyle1.iconTitleColor])






    const classesStyle = useMemo(()=>{

      return {
              highLightColor: toolBoxStyle2.highLightColor, 
	      iconColor: toolBoxStyle2.iconColor, 
	      iconTitleColor: toolBoxStyle2.iconTitleColor
             }

    },[toolBoxStyle2.highLightColor, toolBoxStyle2.iconColor, toolBoxStyle2.iconTitleColor])





    const examsStyle = useMemo(()=>{

      return {
              highLightColor: toolBoxStyle3.highLightColor, 
	      iconColor: toolBoxStyle3.iconColor, 
	      iconTitleColor: toolBoxStyle3.iconTitleColor
             }

    },[toolBoxStyle3.highLightColor, toolBoxStyle3.iconColor, toolBoxStyle3.iconTitleColor])




    const noticesStyle = useMemo(()=>{

      return {
              highLightColor: toolBoxStyle4.highLightColor, 
	      iconColor: toolBoxStyle4.iconColor, 
	      iconTitleColor: toolBoxStyle4.iconTitleColor
             }

    },[toolBoxStyle4.highLightColor, toolBoxStyle4.iconColor, toolBoxStyle4.iconTitleColor])


    const meetingsStyle = useMemo(()=>{

      return {
              highLightColor: toolBoxStyle5.highLightColor, 
	      iconColor: toolBoxStyle5.iconColor, 
	      iconTitleColor: toolBoxStyle5.iconTitleColor
             }

    },[toolBoxStyle5.highLightColor, toolBoxStyle5.iconColor, toolBoxStyle5.iconTitleColor])




    const showNoticesHandler = useCallback(()=>{

	 setToolBoxStyle4( {  highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
         setToolBoxStyle1( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
         setToolBoxStyle2( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
         setToolBoxStyle3( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});	   
         setToolBoxStyle5( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
         props.showNoticeBoard();	   

   },[])


    

    const showMeetingHandler=useCallback(()=>{
    	   
        setToolBoxStyle5( {  highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
        setToolBoxStyle1( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
        setToolBoxStyle2( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
        setToolBoxStyle3( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
        setToolBoxStyle4( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
        props.showMeetings();
    },[])



    const showMeetingHandlerColor=useCallback(()=>{
       setToolBoxStyle5( {  highLightColor:"var(--themeColor)",iconColor:"var(--themeColor)",iconTitleColor:"var(--themeColor)"});
       setToolBoxStyle1( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle2( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle3( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});
       setToolBoxStyle4( {  highLightColor:"white",iconColor:"grey",iconTitleColor:"black"});

    },[])	   


    useEffect(()=>{
  
        //console.log("Top Tool Bar: useEffect-3");
        props.generalOneMeetingMounted && showMeetingHandlerColor();

    },[props.generalOneMeetingMounted,showMeetingHandlerColor ]);





   
    useEffect(()=>{

        //console.log("Top Tool Bar: useEffect-4");
        props.generalMeetingsMounted &&  showMeetingHandler();
        props.generalCoursesMounted &&  showCoursesHandler(); 
	props.generalClassesMounted &&  showClassesHandler();
        props.generalExamsMounted &&  showExamsHandler();
	props.generalNoticesMounted &&  showNoticesHandler();

    },[props.generalMeetingsMounted,
	    props.generalCoursesMounted,
	    props.generalClassesMounted,
	    props.generalExamsMounted,
	    props.generalNoticesMounted,
	    showMeetingHandler,
            showCoursesHandler,
            showClassesHandler,
            showExamsHandler,
            showNoticesHandler
            ]);





return (


<div className={classes.topToolBar}>


    <div className={classes.iconContainerBox}>



         <TopToolBarLeft userData={props.userData}/>

         <div className={classes.buttonsContainer}>

         <TopToolBox toolBoxStyle = {coursesStyle} 
	             onPress = {showCoursesHandler} 
	             icon={MdOutlineDashboard} 
	             iconName="Courses"
	             notificationNum="0"
	             />
         <TopToolBox toolBoxStyle = {classesStyle} 
	             onPress = {showClassesHandler} 
	             icon={GiTeacher} 
	             iconName="Classes"
	             notificationNum="1"
	             />
         <TopToolBox toolBoxStyle = {examsStyle} 
	             onPress = {showExamsHandler} 
	             icon={BsPencilSquare} 
	             iconName="Exams"
	             notificationNum="0"
	             />
	 <TopToolBox toolBoxStyle = {noticesStyle} 
	             onPress = {showNoticesHandler} 
	             icon={CgClipboard} 
	             iconName="Notices"
	             notificationNum="3"
	             />
         <TopToolBox toolBoxStyle = {meetingsStyle} 
	             onPress = {showMeetingHandler} 
	             icon={BsFillCameraReelsFill} 
	             iconName="Meetings"
	             notificationNum="1"
	             />



         </div>

    </div>
   
   
</div>


);


}

export default TopToolBar;


