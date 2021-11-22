import { useHistory } from "react-router"; 
import '../ListTasks.css'; 

export const TaskItem = ({ id, isChecked, taskName, onTaskChange }) => {
  const history = useHistory();

  const styleOfTheComponent = {
    textDecoration: isChecked ? "line-through" : "",
  };

  const handleClick = () => {
    const url = `/tasks/${id}`;
    history.push(url);
  };

  return (
    <li>
      <input onChange={onTaskChange} checked={isChecked} type="checkbox" />
      <span style={styleOfTheComponent}>{taskName}</span>
      <button class="button button1" onClick={handleClick}>edit</button>
    </li>
  );
};
