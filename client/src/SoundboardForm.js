import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SoundboardForm() {

    const [nameForm, setNameForm] = useState("")
    const [descriptionForm, setDescriptionForm] = useState("")
    const [urlForm, setUrlForm] = useState("")
    const [soundError, setSoundError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setSoundError("")
        fetch("/sounds", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: nameForm, description: descriptionForm, sound_url: urlForm})
        }).then((r) => {
            if (r.ok) {
                setSoundError("Sound successfully saved! Please go back to Soundboard to try it out.")
            } else {
                setSoundError("Error: Invalid Prompt")
                console.log(r)
            }
        })
    }

    return (
        <div>
            <div>Fill out this form to properly create a sound for the soundboard.</div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Sound Name: <input
                        type="text"
                        name="name"
                        value={nameForm}
                        onChange={e => setNameForm(e.target.value)}
                    /> <br/>
                    Sound Description: <input
                        type="text"
                        name="description"
                        value={descriptionForm}
                        onChange={e => setDescriptionForm(e.target.value)}
                    /> <br/>
                    Sound URL: <input
                        type="text"
                        name="url"
                        value={urlForm}
                        onChange={e => setUrlForm(e.target.value)}
                    />
                </label>
                <br/>    
                <button type="submit">Create Sound</button>
            </form>
            <div>{soundError}</div>
            <br/>
            <div>(Developer's note: Do not worry about having the correct information, this can be edited later!)</div>
            <br/>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
