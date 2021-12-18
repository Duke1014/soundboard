import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SoundBox from './SoundBox'
import SoundEdit from './SoundEdit'

export default function Soundboard() {

    const [sounds, setSounds] = useState([])
    const [edit, setEdit] = useState(false)

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
                        setEdit={setEdit}
                        className='sound-box'
                    /> </div>
                )) }</div>
            ) : <>
                <div>No Sounds Found :(</div>
            </>}
            <br/>
            <Link to="/" className="back-button">Back</Link>
            <br/> <br/>
            {/* {edit ? <>
                <SoundEdit 
                // id={id} 
                // name={name} 
                // description={description} 
                // sound_url={sound_url} 
                />
            </> : <>
                <div>Edit mode off</div>
            </>} */}
        </div>
    )
}
