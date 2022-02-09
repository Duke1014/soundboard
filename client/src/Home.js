import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import { UserContext } from './context/user'

export default function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [signup, setSignup] = useState(false)
    const [login, setLogin] = useState(false)
    const [error, setError] = useState("")

    const showSignup = () => {
        setSignup(true)
        setLogin(true)
    }
    const showLogin = () => {
        setSignup(false)
        setLogin(false)
    }

    return (
        <div>
            <h1>Duke's Soundboard</h1>
            <h3>{error}</h3>
            {loggedIn ? <>
                <div>
                    <h3><Link to="/soundboard" className="soundboard" user={user}>Soundboard</Link></h3>
                    <h3><Link to="/soundboard-creation" className="soundboard-creation">Make A Sound</Link></h3>
                    <h3><Link to="/user-soundboard" className="user-soundboard">User Soundboard</Link></h3>
                </div>
                <br/>
                <Logout setError={setError}/>
            </> : <>
                {signup ? <>
                    <Signup setError={setError} setSignup={setSignup} setLogin={setLogin} />
                </> : <> 
                    <Login setError={setError} setSignup={setSignup} setLogin={setLogin}/>
                </>}
                {login ? <>
                    <h3>Signed up already? Log in here!</h3>
                    <button onClick={showLogin}>Log In</button>
                </> : <>
                    <h3>Sign up here!</h3>
                    <button onClick={showSignup}>Signup</button>
                </>}
            </>}
        </div>
    )
}
