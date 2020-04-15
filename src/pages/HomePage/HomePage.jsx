import React from 'react';
import './HomePage.css';
import WritingBox from '../../components/WritingBox/WritingBox';
import RandomWordPrompts from '../../components/RandomWordPrompts/RandomWordPrompts';
import AcceptOrRejectBtns from '../../components/AcceptOrRejectBtns/AcceptOrRejectBtns';

const HomePage = (props) => {
    return (
        <div className='container'>
            <div className='HomePage'>
                <RandomWordPrompts />
                <Timer 
                    remainingTime={props.remainingTime}
                    handleTimerUpdate={props.handleTimerUpdate}
                    isTiming={props.isTiming}
                />
                <AcceptOrRejectBtns />
                <WritingBox />
            </div>
        </div>
    );
}

export default HomePage;
