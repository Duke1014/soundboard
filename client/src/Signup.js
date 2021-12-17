import React, { useState } from 'react'

export default function Signup({ setUser, setError, setLogin, setSignup }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then((r) => { 
            if (r.ok) {
                console.log(r)
                setUser(true)
                setLogin(false)
                setSignup(false)
                setError(`Signup successful!`)
            } else {
                setError("Error: oh no")
            }
            
        })
    }

    return (
        <div>
            <br/>
            <form onSubmit={handleSignup}>
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
                    /> <br/>
                    Confirm Password: <input
                        type="password"
                        name="password-confirmation"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                    <br/>
                    <input type="submit"></input>
                </label>
            </form>
        </div>
    )
}
