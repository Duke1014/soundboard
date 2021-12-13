import React, { useState } from 'react'

export default function Login() {
    
    const [userNameFormData, setUserNameFormData] = useState("")
    const [passwordFormData, setPasswordFormData] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
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
                </label>
            </form>
        </div>
    )
}