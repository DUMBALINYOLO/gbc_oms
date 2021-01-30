import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1>About</h1>
            <h3>{props.data.id}</h3>
            <h3>{props.data.username}</h3>
            <h3>{props.data.email}</h3>
        </div>
    )
}
