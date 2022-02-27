import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

export default function Login({ setUser, setError }) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }).then((r) => {
            if (r.ok) {
                setUser(true)
                setError(`Welcome, ${username}!`)
                login(r)
            } else {
                setError("Error: Username or password invalid.")
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    Username: <input
                        className='log-in-username-form'
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    /> <br/>
                    Password: <input
                        className='log-in-password-form'
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}