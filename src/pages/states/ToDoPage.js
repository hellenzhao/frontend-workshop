import ToDo from "../../exercises/ToDo.js"
import "../../css/todo.css"

export default function ToDoPage() {
    return (
        <>
        <h1>States Exercise 2: ToDo List</h1>

        <p>
            Description: Code a ToDo component that represents a todo list.
            <br/>
            Use React's state hook to add, delete, and check off tasks.
        </p>

        <ToDo/>
        </>
    )
}