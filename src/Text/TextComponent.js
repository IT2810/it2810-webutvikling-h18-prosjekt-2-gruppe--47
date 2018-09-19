import React from 'react';
import './Text.css';

const textComponent = (props) => {
    const parsed = JSON.parse(props.text);
    return (
        <div className="TextComponent">
            <h1>{parsed.title}</h1>
            <br/>
            <p>{parsed.author}</p>
            <br/>
            <p>{parsed.poem}</p>
        </div>
    )
};

export default textComponent;