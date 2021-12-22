import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SoundBox from './SoundBox'

export default function Soundboard() {

    const [userSounds, setUserSounds] = useState([])
    const [error, setError] = useState("")
    
    useEffect(() => {
        fetch("/me/sounds")
        .then((r) => r.json())
        .then(setUserSounds)
    }, [error])

    const handlePing = () => {
        setError("")
        fetch("/ping")
        .then(setError("Pong"))
    }

    return (
        <div>
            {userSounds.length > 0 ? (
                <div className='sound-grid'>
                {userSounds.map((sound) => (
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
        </div>
    )
}
