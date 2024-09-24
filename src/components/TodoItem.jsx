function TodoItem({ todo, updateTodo, deleteTodo }) {

    function handleLike() {
        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ likes: todo.likes + 1 })
        })
        .then(res => res.json())
        .then(data => updateTodo(data))
    }

    function handleDelete() {
        fetch(`http://localhost:3000/todos/${todo.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => deleteTodo(todo.id))
    }

    return (
        <div className="todo-item">
            <p>{todo.name}</p>
            <button onClick={handleLike}>Likes: {todo.likes}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default TodoItem