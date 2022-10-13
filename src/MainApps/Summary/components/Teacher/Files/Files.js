import React,{useState} from 'react';

import classes from './Files.module.css';
import {BsUpload} from 'react-icons/bs';
import {AiOutlineLink} from 'react-icons/ai';

import OneFile from './OneFile';

const Files=()=>{


console.log("Files rendeering ");
 const [showAddFileOptions, setShowAddFileOptions] = useState(false);


    const addFileHandler=()=>{

      setShowAddFileOptions(showAddFileOptions=>!showAddFileOptions);

    }







return (
<div className={classes.files}>

     <div className={classes.toolsDiv}>

     <button type="button" className={classes.uploadButton} onClick={addFileHandler}> + Add a file </button>

     { showAddFileOptions &&
     <div className={classes.addFileOptions}>
        <button type="button" className={classes.fileOptionButton}>
             <BsUpload className={classes.uploadIcon}/> Upload from your computer
        </button>

        <button type="button" className={classes.fileOptionButton}>
             <AiOutlineLink className={classes.youtubeIcon}/>Add a external link
        </button>

     </div>
     }
  </div>




    <div className={classes.videoBoxContainer}>

        <OneFile/>
	<OneFile/>
	<OneFile/>
	<OneFile/>
	<OneFile/>
	<OneFile/>
   </div>


























</div>
);

}

export default Files;
