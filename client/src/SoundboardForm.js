import React, { useState } from 'react'

export default function SoundboardForm() {

    const [nameFormData, setNameFormData] = useState("")
    const [descriptionFormData, setDescriptionFormData] = useState("")
    const [urlFormData, setUrlFormData] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch("http://localhost:3000/sounds"), {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({name: nameFormData, description: descriptionFormData, sound_url: urlFormData})
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Sound Name: <input
                                    type="text"
                                    name="name"
                                    value={nameFormData}
                                    onChange={e => setNameFormData(e.target.value)}
                    />
                    Sound Description: <input
                                    type="text"
                                    name="description"
                                    value={descriptionFormData}
                                    onChange={e => setDescriptionFormData(e.target.value)}
                    />
                    Sound URL: <input
                                    type="text"
                                    name="url"
                                    value={urlFormData}
                                    onChange={e => setUrlFormData(e.target.value)}
                    />
                </label>
            </form>
        </div>
    )
}
