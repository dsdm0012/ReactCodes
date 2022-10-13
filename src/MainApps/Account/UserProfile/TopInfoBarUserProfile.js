import React from 'react';
import classes from './TopInfoBarUserProfile.module.css';
//import TopInfoBarInstructor from '../Common/TopInfoBarInstructor';
import TopInfoBarButton from '../Common/TopInfoBarButton.js';
import TopInfoBarInstructor from '../../CommonAppUtilities/TopInfoBarInstructor';
import { useHistory } from 'react-router-dom';

const  TopInfoBarUserProfile =(props) =>  {

let history = useHistory();	


const moveToSetting=()=>{

  history.push('/account/settings');

}

const moveToCourses=()=>{

  history.push('/account/courses');

}





return (



<div className={classes.topInfoBar}>
       
	{ props.selectedCourse !==null && props.selectedCourse.length >0 &&
       <TopInfoBarInstructor selectedCourse={props.selectedCourse}/>
        }

       {/*	
       <TopInfoBarButton  styles={props.styles}  buttonName={'Profile'}/>

       <TopInfoBarButton onPress={moveToSetting}  buttonName={'Settings'}/>
      */}




</div>



);




}


export default TopInfoBarUserProfile;
