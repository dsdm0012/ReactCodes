import classes from './Header.module.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';




function Header(props){

return (
   <header className={classes.header}>

     <HeaderLeft 
	onPress = {props.onPress} 
	selectedCourse={props.selectedCourse} 
	userData={props.userData} 
	dashboardCourses ={props.dashboardCourses}
     />


     <HeaderRight
	userData={props.userData}
	dashboardCourses ={props.dashboardCourses}
	/>	




   </header>);
}


export default Header;
















