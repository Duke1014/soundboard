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
            <form onSubmit={handleSignup}>
                <label>
                    Username: <input
                                    type="text"
                                    name="username"
                                    value={userNameFormData}
                                    onChange={e => setUserNameFormData(e.target.value)}
                    />
                    Password: <input
                                    type="text"
                                    name="password"
                                    value={passwordFormData}
                                    onChange={e => setPasswordFormData(e.target.value)}
                    />
                    Confirm Password: <input
                                    type="text"
                                    name="password-confirmation"
                                    value={passwordConfirmation}
                                    onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}
