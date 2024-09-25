import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function TodoShowPage() {

    const params = useParams()

    const [todo, setTodo] = useState({})
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/todos/${params.id}`)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                setErrors('NOT FOUND')
            }
        })
        .then(data => setTodo(data))
    }, [])

    if (errors) {
        return (
            <>
            <h2>{errors}</h2>
            <Link to='/'>go back home...</Link>
            </>
        )
        }

    return (
        <div>
            <h2>{todo.name}</h2>
            <h3>Likes: {todo.likes}</h3>
        </div>
    )

}

export default TodoShowPage