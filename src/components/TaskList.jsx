import { Task } from "./Task";
import { useState, useEffect } from "react";

export const TaskList = (props) => {
  const { list } = props;

  const [checked, setChecked] = useState([]);

  const handleCheckBox = (taskName) => {
    let checkedAux = [...checked];

    if (!checkedAux.includes(taskName)) { 
      checkedAux = [...checkedAux, taskName];
    } else {
      checkedAux = checkedAux.filter((task) => task !== taskName); 
    }
    setChecked(checkedAux);
    localStorage.setItem("checked", JSON.stringify(checkedAux));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("checked");
    const storageChecked = JSON.parse(localStorageData);

    if (storageChecked) { 
      setChecked(storageChecked);
    }
  }, []);

  return(
        <ul>
            {
                list.map(task => 
                <Task key={task.name} name={task.name} onChangeCheck={handleCheckBox}checked={checked.includes(task.name)}/>)
            }
        </ul>
    );
};



