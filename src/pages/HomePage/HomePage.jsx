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
                />
                <AcceptOrRejectBtns />
                <WritingBox />
            </div>
        </div>
    );
}

export default HomePage;
