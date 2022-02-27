import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const { signup } = useContext(UserContext)

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
                setError(`Signup successful!`)
                r.json()
                .then(data => signup(data))
            } else {
                setError("Error: oh no")
            }
            
        })
    }

    return (
        <div className="sign-up-form">
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
                    <br/>
                    <br/>
                    {error}
                    <br/>
                    <br/>
                    <button><Link to='/' className="back-to-home-button">Back to Homepage</Link></button>
                </label>
            </form>
        </div>
    )
}
