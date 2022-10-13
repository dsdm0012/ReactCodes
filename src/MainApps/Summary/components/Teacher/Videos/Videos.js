import React,{useState} from "react";
import classes from './Videos.module.css';
import OneVideoBox from './OneVideoBox';
import OneVideoReactPlayer from './OneVideoReactPlayer';


import {BsUpload, BsYoutube} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai';


const Videos=()=>{


console.log("Videos rendering ");

    const [showAddVideoOptions, setShowAddVideoOptions] = useState(false); 


    const addVideoHandler=()=>{

      setShowAddVideoOptions(showAddVideoOptions=>!showAddVideoOptions);

    }





return (
<div className={classes.videos}>

  <div className={classes.toolsDiv}> 
     
     <button type="button" className={classes.uploadButton} onClick={addVideoHandler}> + Add a video </button>
 
     { showAddVideoOptions && 	
     <div className={classes.addVideoOptions}> 
	<button type="button" className={classes.videoOptionButton}>
	     <BsUpload className={classes.uploadIcon}/> Upload from your computer
	</button>

	<button type="button" className={classes.videoOptionButton}> 
	     <BsYoutube className={classes.youtubeIcon}/>Add a youtube video 
	</button>

     </div>
     }	     
  </div>


  <div className={classes.videoBoxContainer}>


     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
     <OneVideoBox/>
  </div>



</div>
);

}

export default Videos;
