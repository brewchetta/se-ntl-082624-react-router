import { useState } from 'react'

function TodoForm() {

    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
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