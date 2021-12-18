import React, { useState } from 'react'

export default function SoundEdit( {id, name, description, sound_url} ) {

    const [nameForm, setNameForm] = useState("")
    const [descriptionForm, setDescriptionForm] = useState("")
    const [urlForm, setUrlForm] = useState("")
    // const [soundError, setSoundError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(name)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Sound Name: ({name}) <input
                        type="text"
                        name="name"
                        value={nameForm}
                        onChange={e => setNameForm(e.target.value)}
                    /> <br/>
                    Sound Description: ({description}) <input
                        type="text"
                        name="description"
                        value={descriptionForm}
                        onChange={e => setDescriptionForm(e.target.value)}
                    /> <br/>
                    Sound URL: ({sound_url}) <input
                        type="text"
                        name="url"
                        value={urlForm}
                        onChange={e => setUrlForm(e.target.value)}
                    />
                </label>
                <br/>    
                <button type="submit">Create Sound</button>
            </form>
        </div>
    )
}
