import { useState } from 'react';


/*
 * Code a ToDo component that represents a todo list.
 * Use React's state hook to add, delete, and check off tasks.
*/

/*
export default function ToDo() {
    return (
        <>
        </>
    )
}
*/

// solution
export default function ToDo() {
    const [incompleted, setIncompleted] = useState(["Do Homework", "Exercise"])
    const [completed, setCompleted] = useState(["Make Bed"])
    const [newTask, setNewTask] = useState("")

    const handleChange = (e) => {
        const task = e.target.value
        setNewTask(task)
    }
    const handleAdd = () => {
        setIncompleted([...incompleted, newTask]);
    }
    const handleDel = (listItem, isCompleted) => {
        if (isCompleted) {
            setCompleted(completed.filter((item) => (item !== listItem)))
        }
        else {
            setIncompleted(incompleted.filter((item) => (item !== listItem)))
        }
    }
    const handleCheck = (listItem, isChecked) => {
        if (isChecked) {
            setCompleted([...completed, listItem])
            setIncompleted(incompleted.filter((item) => (item !== listItem)))
        }
        else {
            setIncompleted([...incompleted, listItem])
            setCompleted(completed.filter((item) => (item !== listItem)))
        }
    }


    return (
        <div className="todo-list container">
            <h3>Add Item</h3>
            <p>
                <input id="new-task" type="text" placeholder="Enter task" onChange={handleChange}/>
                <button className="todo-button" id="addButton" onClick={handleAdd}>Add</button>
            </p>
            <h3>Todo</h3>
            <ul id="incompleted-tasks">
                {incompleted.map((listItem) => {
                    return (
                        <li key={listItem}>
                            <input type="checkbox" onChange={() => handleCheck(listItem, true)}/>
                            <label>{listItem}</label>
                            <button className="delete todo-button" onClick={() => handleDel(listItem, false)}>Delete</button>
                        </li>
                    ) 
                })}
            </ul>

            <h3>Completed</h3>
            <ul id="completed-tasks">
                {completed.map((listItem) => {
                    return (
                        <li key={listItem}>
                            <input type="checkbox" onChange={() => handleCheck(listItem, false)}/>
                            <label>{listItem}</label>
                            <button className="delete button" onClick={() => handleDel(listItem, true)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}