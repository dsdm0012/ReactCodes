
import classes from './Overview.module.css';

import InstructorUnit from './InstructorUnit';
import InfoUnit from './InfoUnit';

import About from './About';
import {GiDogHouse,GiProgression,GiTeacher} from 'react-icons/gi';
import {BsPeopleFill,BsFillSquareFill,BsPenFill,BsUiChecksGrid,BsBookFill} from 'react-icons/bs';
import {FaHandPointRight,FaCodiepie,FaRegCreditCard,FaChartBar} from 'react-icons/fa';
import {GrStatusGoodSmall} from 'react-icons/gr';
import {FaBarcode} from 'react-icons/fa';
import {AiOutlineFieldTime} from 'react-icons/ai';

import {MdTimelapse} from 'react-icons/md';

import {ImArrowRight} from 'react-icons/im';

import RecoBooks from './RecoBooks';

import {FcSalesPerformance} from 'react-icons/fc';

import OneStudentCreditScore from './OneStudentCreditScore';




const Overview=()=>{


console.log("overview rendering");



return (

<div className={classes.overview}>

     <div className={classes.instructorGrid}>
        <InstructorUnit/>
     </div>
 



     <div className={classes.generalInfoGrid}>

          <InfoUnit 
	         name="Institute" 
	         value="Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha"
	         icon={GiDogHouse}
	         />

          <InfoUnit
                  name="Designed for"
                  value="Class-11"
	          icon={FaHandPointRight}
                  />

           <InfoUnit
                   name="Subject"
                   value="Physics"
                   icon={BsFillSquareFill}
                  />

	 <InfoUnit
                  name="No. of Students"
                  value="20"
	          icon={BsPeopleFill}
                  />
      
          <InfoUnit
	           name="Status"
	           value="ongoing"
	           icon={GrStatusGoodSmall}
	          />

          <InfoUnit
                   name="Institute code"
                   value="CS223"
	           icon={FaBarcode}
                  />

          <InfoUnit
                   name="Duration"
                   value="22/05/2022 to 20/10/2022"
                   icon={FaCodiepie}
                  />

          <InfoUnit
                   name="Progress"
                   value="40% complete"
                   icon={GiProgression}
                  />

          <InfoUnit
                   name="Upcoming class"
                   value="9:30 am, Monday"
                   icon={GiTeacher}
                  />

          <InfoUnit
                   name="Credit"
                   value="100 marks"
                   icon={FaRegCreditCard}
                  />

          <InfoUnit
                   name="No. of Exams"
                   value="2"
                   icon={BsPenFill}
                  />

	  <InfoUnit
                   name="Pending Assignments"
                   value="1"
                   icon={BsUiChecksGrid}
                  />


     </div>






     <div className={classes.aboutTheCourse}>
          <About icon={ImArrowRight}/>
     </div>






     <div className={classes.recoBooksTitle}>
        <BsBookFill/><span className={classes.recoBookTitleSpan}>Recommended Books</span>
     </div>
     <div className={classes.recoBooks}>
        
	<RecoBooks icon={BsBookFill}/>
	<RecoBooks icon={BsBookFill}/>

     </div>








     
     <div className={classes.recoBooksTitle}>
        <FaChartBar/><span className={classes.recoBookTitleSpan}>Students Credit Score</span>
     </div>


     <div className={classes.creditScore}>

        <OneStudentCreditScore
	 scoreValue='20'
	/>
        <OneStudentCreditScore
         scoreValue='70'
        />
        <OneStudentCreditScore
         scoreValue='50'
        />
        <OneStudentCreditScore
         scoreValue='40'
        />
        <OneStudentCreditScore
         scoreValue='90'
        />
        <OneStudentCreditScore
         scoreValue='75'
        />
        <OneStudentCreditScore
         scoreValue='60'
        />
        <OneStudentCreditScore
         scoreValue='65'
        />

        <OneStudentCreditScore
         scoreValue='100'
        />
	<OneStudentCreditScore
         scoreValue='14'
        />





     </div>




</div>

);

}

export default Overview;
