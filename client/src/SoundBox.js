import React from 'react'

export default function SoundBox({ key, name, description, sound_url }) {


    return (
        <div>
            <h3>{name}</h3>
            <h4>{description}</h4>
            Play Button Here
            <br/>
            Edit Button Here
        </div>
    )
}
