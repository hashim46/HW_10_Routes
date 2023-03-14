import React from 'react'

function Show(props) {
    return ( 
        <div>
            <h1>Show View</h1>
           <h3>I study at {props.school}</h3>
        </div>
    );
}

export default Show;