import React from 'react';
import RandomWordPrompt from '../RandomWordPrompt/RandomWordPrompt';
import './RandomWordPrompts.css';

const RandomWordPrompts = (props) => (
    <div className='RandomWordPrompts'>
        < RandomWordPrompt />
        < RandomWordPrompt />
        < RandomWordPrompt />
    </div>
)

export default RandomWordPrompts;