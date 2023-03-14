import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <h3>My name is {props.name}</h3>
        </div>
    )
}

export default Index