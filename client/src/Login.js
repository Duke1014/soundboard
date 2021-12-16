import React, { useState } from 'react'

export default function Login({ setUser }) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password
            })
        }).then((r) => {
            console.log(r)
            setUser(true)
        })
    }

    return (
        <div>
            <br/>
            <form onSubmit={handleLogin}>
                <label>
                    Username: <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    /> <br/>
                    Password: <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <input type="submit"></input>
            </form>
        </div>
    )
}