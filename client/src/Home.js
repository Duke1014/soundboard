import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
import Logout from './Logout'
import { UserContext } from './context/user'

export default function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [signup, setSignup] = useState(false)
    const [error, setError] = useState("")

    const showLogin = () => {
        setSignup(false)
    }

    return (
        <div>
            <h1 className='title'>Duke's Soundboard</h1>
            <div className='error-home'>{error}</div>
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
                        <h3>Signed up already? Log in here!</h3>
                        <button onClick={showLogin}>Log In</button>
                    </div>
                </> : <> 
                    <div className='log-in'>
                        <h3>Welcome! Log in here:</h3>
                        <Login setError={setError} setSignup={setSignup} />
                        <div className='sign-up-info'>
                            <span>Don't have an account? <Link to="/signup" className="sign-up-page">Sign up here!</Link></span>
                        </div>
                    </div>
                </>}
            </>}
        </div>
    )
}
