import React from 'react';
import '../CSS/Text.css';

const textComponent = (props) => {

    return (
        <div className="textComponent">
            <h1>{props.title}</h1>
            <br/>
            <p className={'author-info'}>{props.author}</p>
            <br/>
            {/* Outputs all lines in the poem as a own p */}
            {props.poem.map((line, i) => <p key={i}>{line}</p>)}
        </div>
    )
};

export default textComponent;
