import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SoundBox from './SoundBox'

export default function Soundboard({  }) {

    const [sounds, setSounds] = useState([])

    useEffect(() => {
        fetch("/sounds")
        .then((r) => r.json())
        .then(setSounds)
    }, [])

    return (
        <div>
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
                    /> </div>
                )) }</div>
            ) : <>
                <div>No Sounds Found :(</div>
            </>}
            <br/>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
