import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

function TodoContainer() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    return (
        <div>

            <h2>Todo List</h2>

            <TodoForm />

            { todos.map(todo => <TodoItem key={todo.id} todo={todo} />) }

        </div>
    )
}

export default TodoContainer