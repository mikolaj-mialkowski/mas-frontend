import Card from '../UI/Card.js';
import "./EmploymentDate.css"

const EmploymentDate = (props) => {
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();
  
    return (
      <Card className='employment'>
        <div className='employment-day'>{day}</div>
        <div className='employment-month'>{month}</div>
        <div className='employment-year'>{year}</div>
      </Card>
    );
  }
  
  export default EmploymentDate;