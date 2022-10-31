import React,{useState, useEffect, CSSProperties} from "react";
import classes from "./CreateCourseForm.module.css";
import {AiFillCloseCircle} from "react-icons/ai";
import logoImage from '../../../../CommonApps/BWlogo.JPG'
import {OptionField, OptionFieldSubmitValue, OptionFieldSecondaryObjs, ParagraphField,TextInput, DateField} from '../../../../CommonApps/FormInputObjects';

import {getticketcategorybyId} from '../../../../CommonApps/AllAPICalls';

import {getalltickets, getticketscategory,createticket,editticket} from '../../../../CommonApps/AllAPICalls';

import FadeLoader from "react-spinners/BeatLoader";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  fontSize:"10px",
};





const CreateTicketForm=(props)=>{



   let color="white";

   const [data, setData] = useState({});
   const [ createState, setCreateState] = useState("notCreating");




   const [categoryData, getCategoryData] = useState([{"id":1,"name":"N/A"}]);
   let PriorityOptions=[{"id":"Low","name":"Low"},{"id":"Medium","name":"Medium"},{"id":"High","name":"High"}, {"id":"Critical","name":"Critical"}]
   let visibilityOptions = [{"id":"Public","name":"Public"},{"id":"Private","name":"Private"}]

   useEffect(()=>{
   let courseId = props.selectedCourse[0].id;
    console.log("courseId: ", courseId);	   
    getticketcategorybyId({courseId, getCategoryData});
   },[]);







//'title','category','priority','visibility','content'

const initialFormData = Object.freeze({

         
        title: props.selectedTicket.title,
        category: props.selectedTicket.category.id,
        priority: props.selectedTicket.priority,
        visibility: props.selectedTicket.visibility,
        content: props.selectedTicket.content,

        });



const [formData, updateFormData] = useState(initialFormData)

const handleChange1 = (e) => {
        //console.log('classname', e.target.value);
        updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
        };







const handleChange = (e) => {
        updateFormData({
                        ...formData,
                        [e.target.name]: e.target.value.trim(),
                });
}







const handleSubmit = (e) => {
	   e.preventDefault();
	   //setShowForm(false);
	   




         let ticketId = props.selectedTicket.id;

	 //console.log("courseId: ", courseId);
	 //console.log("formData: ", formData);
         //setCreateState("Creating");
         editticket({formData, ticketId, props});
	
	
	};



   //console.log("formData: ", formData);


   var today = '2022-10-01';//new Date();


   console.log("props.category", formData);


return(

<div className={classes.createTicketFormDivParent}>

   {/*!showForm &&  
	   <div className={classes.createTicketFormLoading}>

	   <FadeLoader color={color} loading={loading} css={""} size={50}  />
	    
	   <div className={classes.submittingDiv}> Creating . . . </div>
           </div>
   */}


   { 	
  <form className={classes.createTicketForm} onSubmit={handleSubmit}>

     {/*form close button below*/}	
    <div className={classes.closeButtonDiv}>
        <button onClick={props.onPress} className={classes.closeFormButton}> <AiFillCloseCircle className={classes.closeButtonIcon}/> </button>
    </div>	

 
     {/*logo and field title container below*/}
    <div className={classes.logoAndTitleContainer}>
	  <img  className={classes.bwLogo} src={logoImage} alt='edr Logo' />
          <div className={classes.formTitleDiv}><i>  Edit Ticket: {props.selectedTicket.id} </i></div>
    </div>



    <TextInput handleChange={handleChange}
                label="Title"
                placeholder="e.g. Can exam be postponed to next month? "
                name="title"
                requirement="*"
	        defaultValue={props.selectedTicket.title}
                />




     <div className={classes.optionContainers}>
            <OptionField handleChange={handleChange}  
	             label="Category" 
	             name="category"  
	             options={categoryData}
	             requirement="*"
	             defaultValue={props.selectedTicket.category.name}
		     />

            <OptionField handleChange={handleChange}  
	             label="Priority" 
	             name="priority"  
	             options={PriorityOptions}
	             requirement="*"
	             defaultValue={props.selectedTicket.priority}
		     />

            <OptionField handleChange={handleChange}  
	             label="Visibility" 
	             name="visibility"  
	             options={visibilityOptions}
	             requirement="*"
	             defaultValue={props.selectedTicket.visibility}
		     />


     </div>



       <ParagraphField label="About the course" 
	               name="content"  
	               placeholder="Short description..."  
	               handleChange={handleChange}
	               defaultValue={props.selectedTicket.content}
		       />	

 
 




    <div className={classes.submitButtonDiv}>
          {createState ==="Creating" &&
		         <button type="submit"  className= {classes.submit_button} disabled={true}>
                            <FadeLoader color={color} loading={true} css={override} size={10}/>
                            Saving ...
		         </button>
                         }

           {createState ==="notCreating" &&
          <button type="submit"  className= {classes.submit_button} ><b>
		   Save </b> 
          </button>
	   }		   

    </div>






    <div className={classes.emptyDiv}>



     dshdfjhd sdns dasd ashda sdhasd asdjas djasd asdas da asd asd
     asd asda asdb sadasdj dDMNASD ASDNBSAD ASDNBADS ADSNBA Dsj dn
     dcnd ASDNAS DJASD AJSDA DBASD ASDB SADBSA dasjdnbqww dwbdw dd


    </div>
  </form>

   }


</div>	
);

}


export default CreateTicketForm;
