import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Soundboard({  }) {

    useEffect(() => {
        fetch("/sounds").then((r) => {
            console.log(r)
        })
    })

    return (
        <div>

            <br/>
            <Link to="/" className="back-button">Back</Link>
        </div>
    )
}
