import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import SoundBox from './SoundBox'
import { UserContext } from './context/user'

export default function Soundboard() {

    const [sounds, setSounds] = useState([])
    const [error, setError] = useState("")
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch("/sounds")
        .then((r) => r.json())
        .then(setSounds)
    }, [error])

    const handlePing = () => {
        setError("")
        fetch("/ping")
        .then(setError("Pong"))
    }

    return (
        <div>
            {loggedIn ? <>
                {sounds.length > 0 ? (
                <div className='sound-grid'>
                {sounds.map((sound) => (
                    <div key={sound.id}>
                    <SoundBox 
                        id={sound.id}
                        name={sound.name} 
                        description={sound.description} 
                        sound_url={sound.sound_url} 
                        className='sound-box'
                        setError={setError}
                    /> </div>
                )) }</div>
                ) : <>
                    <div>No Sounds Found :(</div>
                </>}
                <br/>
                <Link to="/" className="back-button">Back</Link>
                <br/> <br/>
                <button onClick={handlePing}>PING</button>
                {error}
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>  
            </>}
        </div>
    )
}
