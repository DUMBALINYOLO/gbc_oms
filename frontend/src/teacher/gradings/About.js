import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1>About</h1>
            <h3>{props.data.id}</h3>
            <h3>{props.data.name}</h3>
            <h3>{props.data.klass}</h3>
            <h3>{props.data.total_marks}</h3>
            <h3>{props.data.date}</h3>
            <h3>{props.data.subject}</h3>
        </div>
    )
}
