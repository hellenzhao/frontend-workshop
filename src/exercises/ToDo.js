import { useState } from 'react';


/*
 * Turn the ToDo component into a working todo list.
 * Use React's state hook to add, delete, and check off tasks.
 * Follow the styling given.
*/


export default function ToDo() {
    return (
        <div className="todo-list container">
            <h3>Add Item</h3>
            <p>
                <input id="new-task" type="text" placeholder="Enter Text" />
                <button className="todo-button" id="addButton" >Add</button>
            </p>

            <h3>Todo</h3>
            <ul id="incompleted-tasks">
                <li key="0">
                    <input type="checkbox" checked={false}/>
                    <label>Example incompleted task</label>
                    <button className="delete todo-button">Delete</button>
                </li>
            </ul>

            <h3>Completed</h3>
            <ul id="completed-tasks">
                <li key="0">
                    <input type="checkbox" checked={true}/>
                    <label>Example completed task</label>
                    <button className="delete todo-button">Delete</button>
                </li>
            </ul>
        </div>
    )
}