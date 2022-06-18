import Card from '../UI/Card.js';
import "./EmploymentDate.css"

const EmploymentDate = (props) => {
    const day =  new Date(props.date).toLocaleString("en-US", { day: "2-digit" });
    const month = new Date(props.date).toLocaleString("en-US", { month: "long" });
    const year = (new Date(props.date)).getFullYear();
  
    return (
      <Card className='employment'>
        <div className='employment-day'>{day}</div>
        <div className='employment-month'>{month}</div>
        <div className='employment-year'>{year}</div>
      </Card>
    );
  }
  
  export default EmploymentDate;