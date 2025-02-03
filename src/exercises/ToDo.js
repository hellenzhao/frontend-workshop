import { useState } from 'react';


/*
 * Code a ToDo component that represents a todo list.
 * Use React's state hook to add, delete, and check off tasks.
*/


export default function ToDo() {
    const [incompleted, setIncompleted] = useState([])
    const [completed, setCompleted] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        const task = e.target.value
        setNewTask(task)
    }
    const handleAdd = () => {
        if (newTask !== "") {
            setIncompleted([...incompleted, newTask])
            setNewTask("")
        }
    }
    const handleDel = (index, isCompleted) => {
        if (isCompleted) {
            setCompleted(completed.toSpliced(index, 1))
        }
        else {
            setIncompleted(incompleted.toSpliced(index, 1))
        }
    }
    const handleCheck = (listItem, index, isCompleted) => {
        if (isCompleted) {
            setCompleted([...completed, listItem])
            setIncompleted(incompleted.toSpliced(index, 1))
        }
        else {
            setIncompleted([...incompleted, listItem])
            setCompleted(completed.toSpliced(index, 1))
        }
    }


    return (
        <div className="todo-list container">
            <h3>Add Item</h3>
            <p>
                <input id="new-task" type="text" placeholder="Enter task" value={newTask} onChange={handleChange}/>
                <button className="todo-button" id="addButton" onClick={handleAdd}>Add</button>
            </p>
            <h3>Todo</h3>
            <ul id="incompleted-tasks">
                {incompleted.map((listItem, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" checked={false} onChange={() => handleCheck(listItem, index, true)}/>
                            <label>{listItem}</label>
                            <button className="delete todo-button" onClick={() => handleDel(index, false)}>Delete</button>
                        </li>
                    ) 
                })}
            </ul>

            <h3>Completed</h3>
            <ul id="completed-tasks">
                {completed.map((listItem, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" checked={true} onChange={() => handleCheck(listItem, index, false)}/>
                            <label>{listItem}</label>
                            <button className="delete button" onClick={() => handleDel(index, true)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}