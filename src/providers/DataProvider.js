import React, { useState } from "react";

export const tasks = [
  {
    id: "1",
    isCompleted: "TODO",
    name:"Reparar",
    description: "Arreglar el checklist del edit", 
    dueDate: "2022-03-31",  
    assigned:"David Coronado",
  },
  {
    id: "2",
    isCompleted: "TODO", 
    name: "Limpiar Campo",
    description: "Limpiar el campo del create task cuando se crea tarea", 
    dueDate: "2022-03-31",  
    assigned:"David Coronado",
    
  },
  {
    id: "3",
    isCompleted: "TODO", 
    name:"Mejora UI",
    description: "Mejorar el UI usando CSS", 
    dueDate: "2022-03-31",  
    assigned:"David Coronado",
  },
  {
    id: "4",
    isCompleted: "TODO", 
    name: "Modificar Estructura",
    description: "Modificar la estructura del proyecto(UI y lógica) para que el Task tenga los siguientes campos: [name, description,assignedTo, dueDate, [status(TODO, IN_PROGRESS,REVIEW, DONE)]", 
    dueDate: "2022-03-31",  
    assigned:"David Coronado",
  }
];

const initialData = { tasks };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};
