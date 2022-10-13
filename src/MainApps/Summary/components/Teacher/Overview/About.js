


import classes from './About.module.css';


const About=(props)=>{

return (

<div className={classes.about}>
        <div className={classes.aboutTitle}>
	   <props.icon/>
	   <span>About the Course</span> 
	</div>
        <div className={classes.aboutText}>
        Try to have a variety of tests of knowledge. Ungraded quizzes help a student practise their knowledge, while self-assessments are better for reflection and goal-setting.
For example, if you are teaching others how to start their own business, a practical assessment might be writing a business plan and getting feedback from friends and family on social media.
       </div>






</div>
);
	
}

export default About;
