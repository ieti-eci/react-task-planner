import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useData } from "../providers/DataProvider";
import '../EditTask.css'; 

export const TaskForm = () => {
  const history = useHistory();
  const { data, setData } = useData();
  const { taskId } = useParams(); 

  const tasks = data.tasks;
  const task = data.tasks.find((task) => task.id === taskId);

  const [taskJason, setTaskJson] = useState(task ?? {});
  //const [isCompleted, setIsCompleted] = useState(task?.isCompleted ?? "");


  if (!task) {
    return <div>Task not found</div>;
  }
  /** 
  const onTaskChange = () => { 
    task.isCompleted=!task.isCompleted;
    setIsCompleted(task.isCompleted);

  };  
  */
  const handleClickSubmit = (event) => { 

    event.preventDefault();  
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        var select = document.getElementById('lstatus');
        var valueStatus = select.options[select.selectedIndex].value; 
    
        const newTask = { 
          id : String(tasks.length+1),
          isCompleted:valueStatus,
          name: document.getElementById("fname").value, 
          description:document.getElementById("ldescription").value, 
          dueDate:document.getElementById("ldate").value,
          assigned:document.getElementById("lassigned").value,
        };  
        return newTask; 
      }

      return task;
    });


    setData((prev) => ({ ...prev, tasks: newTasks }));
    alert("saved");
    history.push("/");

  }

  const handleClickCancel = () => history.push("/"); 

  const handleChange = (e) => {
    const newTask  = task;
    setTaskJson({taskJason: newTask });
    
  };

  /** 
  const handleSave = (event) => { 
    event.preventDefault();
    const newTasks = data.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: text };
      }

      return task;
    });

    setData((prev) => ({ ...prev, tasks: newTasks }));
    
    history.goBack();
  };
  */
  return (
    <div> 
      <h1>Edit Task</h1>
      <form  onSubmit={handleClickSubmit}>
          <label for="fname">Name</label>
          <input type="text" onChange={handleChange}  id="fname" name="firstname" placeholder="Name task.." value={taskJason.name} required/>

          <label for="ldescription">Description</label>
          <input type="text"  onChange={handleChange} id="ldescription" name="ldescription" placeholder="Description task.." value={taskJason.description} required/> 

          <label for="ldate">Due Date</label>
          <input type="text" onChange={handleChange}  id="ldate" name="ldate" placeholder="AAAA-MM-DD" value={taskJason.dueDate} required/> 

          <label for="lassigned">Assigned to</label>
          <input type="text" onChange={handleChange} id="lassigned" name="lassigned" placeholder="Name Student" value={taskJason.assigned} required/>



          <label for="lstatus">Status</label>
          <select id="lstatus" name="country">
              <option value="TODO">TODO</option>
              <option value="IN_PROGRESS">IN PROGRESS</option> 
              <option value="REVIEW">REVIEW</option>
              <option value="DONE">DONE</option>
          </select>
      
          <input type="submit" value="Submit"/> 
          <button class="buttonCancel"onClick={handleClickCancel}>Cancel</button>
      </form>
    </div>
  );
};
