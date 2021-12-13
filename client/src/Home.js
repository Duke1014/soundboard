import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'

export default function Home() {

    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)

    const showSignup = () => {
        setSignup(true)
        setLogin(false)
    }
    const showLogin = () => {
        setLogin(true)
        setSignup(false)
    }

    return (
        <div>
            <h1>Duke's Soundboard</h1>
            <div>
                <h3><Link to="/soundboard" className="soundboard">Soundboard</Link></h3>
                <h3><Link to="/soundboard-creation" className="soundboard-creation">Make A Sound</Link></h3>
                <h3><Link to="/about" className="about">About</Link></h3>
            </div>
            <button onClick={showSignup}>Signup</button>
            <button onClick={showLogin}>Login</button>

            {signup ? 
            <>
                <Signup />
            </> : <>
                
            </>}
            {login ? 
            <>
                <Login />
            </> : <>
                
            </>}
        </div>
    )
}