// import { useState } from "react";
import { useData } from "../providers/DataProvider";
import { TaskItem } from "./TaskItem";  
import { useHistory } from "react-router"; 
import '../ListTasks.css'; 


export const TaskList = () => {

  const history = useHistory();
  const { data, setData } = useData(); 
  
  // const [textValue, setTextValue] = useState("");
  

  const tasks = data.tasks;

  const handleTaskChange = (index) => () => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));
  };

  const newTask = () => { 
    const url = `/new-task`;
    history.push(url);
    
    /**
    const newTask = {
      isCompleted: false,
      name: name,
    };  
     
    setTextValue("");
    setData((prev) => ({ ...prev, tasks: [...tasks, newTask] }));
    */
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTask();
  };

  /** 
  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };
  */

  return (
    <article>
      <h1>Task List </h1>
      <button onClick={handleSubmit} class="button button1">Create Task</button>


      <div class= "row "> 
        {tasks.map((task, index) => {
          return (
            <TaskItem
              id={task.id}
              isChecked={task.isCompleted} 
              taskName={task.name}
              description={task.description} 
              dueDate={task.dueDate} 
              assignedTo={task.assigned}
              onTaskChange={handleTaskChange(index)}
            />
          );
        })}
      </div>
    </article>
  );
};
