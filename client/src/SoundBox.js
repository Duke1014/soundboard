import React, {  } from 'react'

export default function SoundBox({ id, name, description, sound_url, setEdit }) {

    const handlePlay = (e) => {
        e.preventDefault()
        setEdit(false)
    }

    return (
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            <button onClick={handlePlay}>►</button>
            <button className='edit-button' onClick={setEdit(true)}>✎</button>
        </div>
    )
}
