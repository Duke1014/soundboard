import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'

export default function Home() {

    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then(setUser(true));
          }
        });
      }, []);

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
                <h3><Link to="/soundboard" className="soundboard" user={user}>Soundboard</Link></h3>
                <h3><Link to="/soundboard-creation" className="soundboard-creation">Make A Sound</Link></h3>
                <h3>{error}</h3>
            </div>

            {user ? 
            <>
                <br/>
                <br/>
                <Logout setUser={setUser} setError={setError}/>
            </> : <>
                <button onClick={showSignup}>Signup</button>
                <button onClick={showLogin}>Login</button>
            </>}

            {signup ? 
            <>
                <Signup setUser={setUser} setError={setError} setSignup={setSignup} setLogin={setLogin} />
            </> : <>
                
            </>}
            {login ? 
            <>
                <Login setUser={setUser} setError={setError} setSignup={setSignup} setLogin={setLogin}/>
            </> : <>
                
            </>}
        </div>
    )
}
