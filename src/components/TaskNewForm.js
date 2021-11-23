import { useHistory} from "react-router"; 
import '../EditTask.css';  
import { useData } from "../providers/DataProvider";

export const TaskNewForm = () =>{
    const history = useHistory(); 
    const { data, setData } = useData();  
    const tasks = data.tasks;

    const handleClickSubmit = (event) => {   
        event.preventDefault(); 
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
        setData((prev) => ({ ...prev, tasks: [...tasks, newTask] }));
        alert("saved");
        history.goBack();

    }; 

    const handleClickCancel = () => history.goBack();

    return(
        <div> 
            <h1>New Task</h1>
            <form  onSubmit={handleClickSubmit}>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Name task.." required/>

                <label for="ldescription">Description</label>
                <input type="text" id="ldescription" name="ldescription" placeholder="Description task.." required/> 

                <label for="ldate">Due Date</label>
                <input type="text" id="ldate" name="ldate" placeholder="AAAA-MM-DD" required/> 

                <label for="lassigned">Assigned to</label>
                <input type="text" id="lassigned" name="lassigned" placeholder="Name Student" required/>



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


}