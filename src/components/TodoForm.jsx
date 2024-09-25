import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function TodoForm({ addTodo }) {

    const navigate = useNavigate()

    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name, likes: 0 })
        })
        .then(res => res.json())
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text"
            value={name} 
            onChange={e => setName(e.target.value)} />

            <input type="submit" value="add todo" />

        </form>
    )

}

export default TodoForm