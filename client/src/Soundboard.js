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
                sounds.map((sound) => (
                    <SoundBox key={sound.id} name={sound.name} description={sound.description} sound_url={sound.sound_url} />
                ))
            ) : <>
                <div>No Sounds Found :(</div>
            </>}
            <br/>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
