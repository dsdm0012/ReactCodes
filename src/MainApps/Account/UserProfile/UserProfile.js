import React,{useState,useEffect} from "react";
import classes from '../Common/MainAppContainer.module.css';


import TopInfoBarUserProfile from './TopInfoBarUserProfile';
import TopTitleBar from '../Common/TopTitleBar';
import ContentDivUserProfile from './ContentDivUserProfile';



const UserProfile = (props) =>{

  let title="User Profile";	


  const [sideNavBarWidth,setSideNavBarWith]=useState(props.sideNavBarWidth);

  const [profileWidth,setProfileWith]=useState('calc( 100% - var(--sideNavBarWidth) )')	



  useEffect(() => {
      setSideNavBarWith(props.sideNavBarWidth);
      if(props.sideNavBarWidth==="var(--sideNavBarWidth)"){setProfileWith('calc( 100% - var(--sideNavBarWidth) )');}
      if(props.sideNavBarWidth==="var(--sideNavBarWidthOnContract)"){setProfileWith('calc( 100% - var(--sideNavBarWidthOnContract) )');}




   }, [props.sideNavBarWidth]);

  const styles = {color: 'white',backgroundColor: '#919191'}




return (

<div className={classes.mainAppContainer} style={{left:sideNavBarWidth, width:profileWidth}}>
   

   <TopInfoBarUserProfile styles={styles} selectedCourse={props.selectedCourse}/>  
   <TopTitleBar title={title} userData={props.userData}/>		
   <ContentDivUserProfile userData={props.userData} rerender={props.rerender}/>
  

</div>

);

}



export default UserProfile;


