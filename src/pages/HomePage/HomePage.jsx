import React from 'react';
import WritingBox from '../../components/WritingBox/WritingBox';
import './HomePage.css';
import RandomWordPrompts from '../../components/RandomWordPrompts/RandomWordPrompts';

const HomePage = (props) => {
    return (
        <div className="HomePage">
            <RandomWordPrompts />
            <WritingBox />
        </div>
    );
}

export default HomePage;
