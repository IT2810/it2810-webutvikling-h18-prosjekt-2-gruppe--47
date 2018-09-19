import React from 'react';
import './Text.css';

const textComponent = (props) => {

    return (
        <div className="TextComponent">
            <h1>{props.title}</h1>
            <br/>
            <p>{props.author}</p>
            <br/>
            {/* Outputs all lines in the poem as a own p */}
            {props.poem.map((line, i) => <p key={i}>{line}</p>)}
        </div>
    )
};

export default textComponent;