import React from 'react';
import RandomWordPrompt from '../RandomWordPrompt/RandomWordPrompt';
import './RandomWordPrompts.css';

const RandomWordPrompts = (props) => {
    const randomWordsJSX = props.randomWords.map((word) => 
        <RandomWordPrompt 
            key={word.toString()}
            randomWord={word}
        />
    );
    return (
    <div className='RandomWordPrompts'>
       {randomWordsJSX}
    </div>
    )
}

export default RandomWordPrompts;