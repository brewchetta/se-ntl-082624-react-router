import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

function TodoContainer() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.log(err))
    }, [])

    function addTodo(todoObj) {
        setTodos([...todos, todoObj])
    }

    function updateTodo(patchedTodoObj) {
        const updatedTodos = todos.map(todo => todo.id !== patchedTodoObj.id ? todo : patchedTodoObj)
        setTodos(updatedTodos)
    }

    function deleteTodo(id) {
        const filteredTodos = todos.filter(todo => todo.id !== id)
        setTodos(filteredTodos)
    }

    return (
        <div>

            <h2>Todo List</h2>

            <TodoForm addTodo={addTodo} />

            { todos.map(todo => <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />) }

        </div>
    )
}

export default TodoContainer