




import classes from './InfoUnit.module.css';

const InfoUnit=(props)=>{

return (

<div className={classes.infoUnit}>
   <div className={classes.nameStyle}>
    <props.icon/> {props.name}
   </div>
   <div className={classes.valueStyle}>{props.value}</div>

</div>

);

}

export default InfoUnit;
