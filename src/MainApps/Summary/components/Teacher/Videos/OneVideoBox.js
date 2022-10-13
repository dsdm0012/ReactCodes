
import React from 'react';
import classes from './OneVideoBox.module.css';
import ReactPlayer from 'react-player';

const OneVideoBox=()=>{


return (

<div className={classes.oneVideoBox}>
	{/*
       <iframe
        src="https://www.youtube.com/embed/TedGJlmQfaU"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
	className={classes.iframestyle}
      />
      */}
     <ReactPlayer url="https://www.youtube.com/watch?v=a8LPqp47Nps" width="100%" height="100%" controls={true} />



   
   <div className={classes.videoInfoBox}>
 
      <div> <b>Class-8: Laws of Motion</b></div>
      <div style={{color: "grey"}}> by Mr. Ipsit Panda</div>
      

   </div>
   
</div>

);




}

export default OneVideoBox;
