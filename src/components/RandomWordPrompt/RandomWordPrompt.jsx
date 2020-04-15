import React from 'react';
import './RandomWordPrompt.css';

const RandomWordPrompt = (props) => (
    <div className="RandomWordPrompt">
        <div className="card-panel teal">
            <span className="white-text">{props.randomWord}</span>
        </div>
    </div>
);

export default RandomWordPrompt;