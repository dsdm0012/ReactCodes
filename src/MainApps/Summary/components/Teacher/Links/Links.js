

import classes from './Links.module.css';

const Links=()=>{


console.log("Links Rendering");


  const addLinkHandler=()=>{


  }


  const openLinkInNewTabHandler=()=>{

   let meetingLink = "https://www.tifr.res.in/";
       window.open(meetingLink, "_blank") 

  }





return (
<div className={classes.links}>

    <div className={classes.toolsDiv}>

         <button type="button" className={classes.uploadButton} onClick={addLinkHandler}> + Add a link </button>

    </div>




  <ol>
     <li>
	<button type="button" className={classes.linkBoxContainer} onClick={openLinkInNewTabHandler}>
        Tata Institute of Fundamental Research, Mumbai
        </button>
     </li>


     <li>
	<button type="button" className={classes.linkBoxContainer} onClick={openLinkInNewTabHandler}>
        Indian Institute of Technology, Delhi
       </button>
     </li>


     <li>
	<button type="button" className={classes.linkBoxContainer} onClick={openLinkInNewTabHandler}>
        Institute of Science Education and Research, Pune
       </button>

     </li>
  </ol>	

    




</div>
);

}

export default Links;
