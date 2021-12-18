import React from 'react'

export default function SoundBox({ key, name, description, sound_url }) {

    const handlePlay = () => {
        console.log("MOO")
    }

    return (
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button onClick={handlePlay}>►</button>
            <br/>
            Edit Button Here
        </div>
    )
}
