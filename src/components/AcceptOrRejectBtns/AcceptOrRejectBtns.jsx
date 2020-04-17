import React from 'react';
import './AcceptOrRejectBtns.css'

const AcceptOrRejectBtns = (props) => (
<div className="AcceptOrRejectBtns">
    <button 
        className="waves-effect green btn-large" 
        onClick={() => props.handleTimerStart()}>
            <i className="material-icons left">check_circle</i>
            accept
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button 
        className="waves-effect red btn-large"
        onClick={() => props.handleGetRandomWords()}>
            <i className="material-icons right">close</i>
            reject
    </button>
</div>
)

export default AcceptOrRejectBtns;