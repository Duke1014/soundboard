import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Logout from './Logout'
import { UserContext } from './context/user'

export default function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [signup, setSignup] = useState(false)
    const [error, setError] = useState("")

    const showSignup = () => {
        setSignup(true)
    }
    const showLogin = () => {
        setSignup(false)
    }

    return (
        <div>
            <h1 className='title'>Duke's Soundboard</h1>
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
                    <div className='sign-up'>
                        <h3>Sign up here!</h3>
                        <Signup setError={setError} setSignup={setSignup} />
                        <h3>Signed up already? Log in here!</h3>
                        <button onClick={showLogin}>Log In</button>
                    </div>
                </> : <> 
                    <div className='log-in'>
                        <h3>Welcome! Log in here:</h3>
                        <Login setError={setError} setSignup={setSignup} />
                        <h3>Sign up here!</h3>
                        <button onClick={showSignup}>Signup</button>
                    </div>
                </>}
            </>}
        </div>
    )
}
