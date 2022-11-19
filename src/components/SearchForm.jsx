import React, { useState } from 'react'
import UserCardList from './UserCardList'

export default function SearchForm() {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')

    const handleSubmit = async () => {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const data = await res.json()
        console.log(data)
        setUsers([...users, data])
        console.log(users)
    }

  return (
    <div>
        <h1>Github User List</h1>
        <form >
            <label>
                Username:
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value)} />
            </label>

            <button type='button' onClick={handleSubmit}>Go</button>
        </form>
        <UserCardList users = {users}/>

    </div>
  )
}
