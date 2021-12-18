import React from 'react'
import { Link } from 'react-router-dom'

export default function SoundBox({ id, name, description, sound_url }) {

    const handlePlay = () => {
        console.log("MOO")
    }

    return (
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button onClick={handlePlay}>►</button>
            <Link to={`/soundboard-edit/${id}`} 
                className='edit-button' 
                id={id} 
                name={name} 
                description={description} 
                sound_url={sound_url}>
                <button onClick={handlePlay}>✎</button>
            </Link>
        </div>
    )
}
