import React, { useState } from 'react'

export default function Signup() {

    const [userNameFormData, setUserNameFormData] = useState("")
    const [passwordFormData, setPasswordFormData] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <br/>
            <form onSubmit={handleSignup}>
                <label>
                    Username: <input
                                    type="text"
                                    name="username"
                                    value={userNameFormData}
                                    onChange={e => setUserNameFormData(e.target.value)}
                    /> <br/>
                    Password: <input
                                    type="password"
                                    name="password"
                                    value={passwordFormData}
                                    onChange={e => setPasswordFormData(e.target.value)}
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
