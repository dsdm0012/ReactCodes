import React,{useState,memo} from 'react';
import classes from './TopToolBarV1.module.css';
import {BsChevronDown} from 'react-icons/bs';
import {changeusertype} from '../../../../../CommonApps/AllAPICalls';

//import {Typography} from '@material-ui/core';

const TopToolBarLeft=(props)=>{



        const showUsertypeChangeHandler=()=>{

           setShowDropDown(showDropDown=>!showDropDown);

        }

        const [showDropDown, setShowDropDown] = useState(false);


        const changeUserTypeToStudentHandler=()=>{

	    let usertypeId=2;	
            changeusertype({usertypeId});

	}


       const changeUserTypeToTeacherHandler=()=>{
            let usertypeId=1;
            changeusertype({usertypeId});
       }






return (

        <div className={classes.topToolBarLeft}>

	        <div className={classes.dashboardTitle}> 	              
	              <span className={classes.topbarTitle}> <i style={{fontStyle:'normal',color: '#303030'}}>Dashboard</i></span> 
	        </div>

                <div className={classes.userTypeInfo}>
                      {props.userData.usertype===1 && <div>
                                      <span>You  are a</span>
                                      <span className={classes.buttonsDivTnS}>
                                          <button className={classes.teacherButton} onClick={showUsertypeChangeHandler}>
                                             <span>Teacher </span>
                                             <span className={classes.downArrowSpan}><BsChevronDown/></span>
                                          </button>

                                           {showDropDown && <button className={classes.studentButton} onClick={changeUserTypeToStudentHandler}> 
						               Student 
						            </button>
					   }

                                       </span>
                                    </div>
                      }
                      {props.userData.usertype===2 && <div>
                                      
                                        <span>You  are a</span>
                                        <span className={classes.buttonsDivTnS}>
                                          <button className={classes.teacherButton} onClick={showUsertypeChangeHandler}>
                                             <span>Student </span>
                                             <span className={classes.downArrowSpan}><BsChevronDown/></span>
                                          </button>

                                           {showDropDown && <button className={classes.studentButton} onClick={changeUserTypeToTeacherHandler}>
                                                               Teacher
                                                            </button>
                                           }

                                       </span>

				      </div>
                      }
                </div>
         </div>





);

}

export default memo(TopToolBarLeft);
