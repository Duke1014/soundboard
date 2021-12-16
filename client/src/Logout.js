import React from 'react'

export default function Logout({ setUser }) {

    const logout = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
