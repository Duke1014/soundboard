import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'
import Logout from './Logout'
import { UserContext } from './context/user'

export default function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [error, setError] = useState("")

    return (
        <div>
            <header className='title'>Duke's Soundboard</header>
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
                <div className='log-in'>
                    <h3>Welcome! Log in here:</h3>
                    <Login setError={setError} />
                    <div className='sign-up-info'>
                        <span>Don't have an account? <Link to="/sign-up" className="sign-up-page">Sign up here!</Link></span>
                    </div>
                </div>
            </>}
        </div>
    )
}
