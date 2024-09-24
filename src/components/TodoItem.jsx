function TodoItem({ todo }) {

    function handleLike() {
        console.log("LIKING")
    }

    return (
        <div className="todo-item">
            <p>{todo.name}</p>
            <button onClick={handleLike}>Likes: {todo.likes}</button>
        </div>
    )

}

export default TodoItem