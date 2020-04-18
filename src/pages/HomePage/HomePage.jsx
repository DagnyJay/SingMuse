import React from 'react';
import './HomePage.css';
import WritingBox from '../../components/WritingBox/WritingBox';
import RandomWordPrompts from '../../components/RandomWordPrompts/RandomWordPrompts';
import AcceptOrRejectBtns from '../../components/AcceptOrRejectBtns/AcceptOrRejectBtns';
import Timer from '../../components/Timer/Timer';


const HomePage = (props) => {
    return (
        <div className='container'>
            <div className='HomePage'>
                <RandomWordPrompts 
                    randomWords={props.randomWords}
                />
                <Timer 
                    remainingTime={props.remainingTime}
                    handleTimerUpdate={props.handleTimerUpdate}
                    isTiming={props.isTiming}
                    handleTimerEnd={props.handleTimerEnd}
                />
                <AcceptOrRejectBtns 
                    handleTimerStart={props.handleTimerStart}
                    handleGetRandomWords={props.handleGetRandomWords}
                />
                <WritingBox 
                    handleAddToWritings={props.handleAddToWritings}
                    isTiming={props.isTiming}
                />
            </div>
        </div>
    );
}

export default HomePage;
