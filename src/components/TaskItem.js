import { useHistory } from "react-router"; 
import '../ListTasks.css';  
import task from '../task.png'; 

export const TaskItem = ({ id, isChecked, taskName, description, dueDate, assignedTo ,onTaskChange }) => {
  const history = useHistory();

  /** 
  const styleOfTheComponent = {
    textDecoration: isChecked ? "line-through" : "",
  };
  */
  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  return ( 
    /** 
    <li>
      <input onChange={onTaskChange} checked={isChecked} type="checkbox" />
      <span style={styleOfTheComponent}>{taskName}</span>
      <button class="button button1" onClick={handleClick}>edit</button>
    </li>
    */ 
    <div class="column card">
      <img src={task} alt="Avatar" class="center" />
      <div class="container">
          <h4><b>{taskName}</b></h4>
          <p>{"Description: "+description+"."}
          <br/>{"Due Date: "+dueDate}
          <br/>{"Assignet To: "+assignedTo}
          <br/>{"Status: "+isChecked}
          </p>
          
      </div> 
      <button class="button button1" onClick={handleClick}>edit</button>
    </div> 
  );
};
