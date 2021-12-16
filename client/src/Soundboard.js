import React from 'react'
import { Link } from 'react-router-dom'

export default function Soundboard({ user }) {
    
    return (
        <div>
            {user ?
            <>
                <div>hello</div>
            </> : <>
                <div>You must be signed in to use the soundboard</div>
            </>}

            
            <br/>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
